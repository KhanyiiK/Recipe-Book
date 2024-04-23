// Import necessary modules and components
import React from 'react'; // Import React module
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React
import { useParams } from 'react-router-dom'; // Import useParams for accessing route parameters
import styled from 'styled-components'; // Import styled-components for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

// Define the Searched component
function Searched() {
    // State to store searched recipes
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    // Get parameters from URL
    let params = useParams();

    // Function to fetch searched recipes
    const getSearched = async (name) => {
        // Fetch recipes from API based on search query
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        // Set the fetched recipes to state
        setSearchedRecipes(recipes.results);
    };

    // Fetch searched recipes when component mounts or when search query changes
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    // Render the Searched component
    return (
        <Grid>
            {/* Map through searched recipes and render each recipe as a card */}
            {searchedRecipes.map((item) => {
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

// Styled components for the Searched component
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

// Export the Searched component as the default export
export default Searched;
