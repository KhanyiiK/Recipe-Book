// Import necessary modules and components
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import styled from "styled-components"; // Import styled-components for styling
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Import Splide carousel components
import '@splidejs/react-splide/css'; // Import Splide CSS
import { Link } from "react-router-dom"; // Import Link component for routing

// Define the Popular component
function Popular() {
  // State to store popular recipes
  const [popular, setPopular] = useState([]);

  // Fetch popular recipes on component mount
  useEffect(() => {
    getPopular();
  }, []);

  // Function to fetch popular recipes from API
  const getPopular = async () => {
    // Check if popular recipes are stored in localStorage
    const check = localStorage.getItem("popular");

    if (check) {
      // If available in localStorage, set popular recipes from localStorage
      setPopular(JSON.parse(check));
    } else {
      // If not available in localStorage, fetch popular recipes from API
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();

      // Store fetched popular recipes in localStorage and state
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  // Render the Popular component
  return (
    <div>
      {/* Wrapper for popular recipe carousel */}
      <Wrapper>
        <h3>You Might Like:</h3>
        {/* Splide carousel for popular recipes */}
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {/* Map through popular recipes and render each recipe as a Splide slide */}
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                {/* Card for each recipe */}
                <Card>
                  {/* Link to recipe details page */}
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p> {/* Recipe title */}
                    <img src={recipe.image} alt={recipe.title} /> {/* Recipe image */}
                    <Gradient /> {/* Gradient overlay */}
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

// Styled components for Popular component
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;

// Export the Popular component as the default export
export default Popular;
