// Import necessary modules and components
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import styled from "styled-components"; // Import styled-components for styling
import { Splide, SplideSlide } from "@splidejs/react-splide"; // Import Splide carousel components
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide CSS
import { Link } from "react-router-dom"; // Import Link component for routing

// Define the Veggie component
function Veggie() {
  // State to store vegetarian recipes
  const [veggie, setVeggie] = useState([]);

  // Fetch vegetarian recipes on component mount
  useEffect(() => {
    getVeggie();
  }, []);

  // Function to fetch vegetarian recipes from API
  const getVeggie = async () => {
    // Check if vegetarian recipes are stored in localStorage
    const check = localStorage.getItem("veggie");

    if (check) {
      // If available in localStorage, set vegetarian recipes from localStorage
      setVeggie(JSON.parse(check));
    } else {
      // If not available in localStorage, fetch vegetarian recipes from API
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      // Store fetched vegetarian recipes in localStorage and state
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  // Render the Veggie component
  return (
    <div>
      {/* Wrapper for vegetarian recipe carousel */}
      <Wrapper>
        <h3>Trending Right Now</h3>
        {/* Splide carousel for vegetarian recipes */}
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {/* Map through vegetarian recipes and render each recipe as a Splide slide */}
          {veggie.map((recipe) => {
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

// Styled components for Veggie component
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

// Export the Veggie component as the default export
export default Veggie;
