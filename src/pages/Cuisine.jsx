// Import necessary modules and components
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import styled from 'styled-components'; // Import styled-components for styling
//import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams for routing

// Define the Cuisine component
function Cuisine() {
    // State to store recipes for the selected cuisine
    const [cuisine, setCuisine] = useState([]);
    // Get parameters from URL
    let params = useParams();

    // Function to fetch recipes based on cuisine type
    const getCuisine = async (name) => {
        // Fetch recipes from API based on cuisine type
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        // Set the fetched recipes to state
        setCuisine(recipes.results);
    };

    // Fetch recipes when component mounts or when cuisine type changes
    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type); // Log the cuisine type
    }, [params.type]);

    // Render the Cuisine component
    return (
        // Grid layout for displaying recipe cards
        <Grid>
            {/* Map through recipes and render each recipe as a card */}
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        {/* Link to recipe details page */}
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt="" /> {/* Recipe image */}
                            <h4>{item.title}</h4> {/* Recipe title */}
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

// Styled components for the Cuisine component
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-row-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

// Export the Cuisine component as the default export
export default Cuisine;
