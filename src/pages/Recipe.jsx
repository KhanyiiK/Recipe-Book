// Import necessary modules and components
import React from 'react'; // Import React module
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React
import styled from 'styled-components'; // Import styled-components for styling
import { useParams } from 'react-router-dom'; // Import useParams for accessing route parameters

// Define the Recipe component
function Recipe() {
  // Get parameters from URL
  let params = useParams();
  // State to store recipe details
  const [details, setDetails] = useState({});
  // State to manage active tab (instructions or ingredients)
  const [activeTab, setActiveTab] = useState('instructions');

  // Function to fetch recipe details
  const fetchDetails = async () => {
    // Fetch recipe details from API
    const data = await fetch (
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    // Set the fetched recipe details to state
    setDetails(detailData);
    console.log(detailData);
  };

  // Fetch recipe details when component mounts or when recipe name changes
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  // Render the Recipe component
  return (
    <DetailWrapper>
      <div>
        {/* Recipe title and image */}
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      {/* Tab buttons for instructions and ingredients */}
      <Info>
        <Button 
          className={activeTab === 'instructions' ? 'active' : ''} 
          onClick={() => setActiveTab("instructions")}
        >
          Instructions 
        </Button>
        <Button 
          className={activeTab === 'ingredients' ? 'active' : ''} 
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients 
        </Button>
        {/* Render instructions if activeTab is 'instructions' */}
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
          </div>
        )}
        {/* Render ingredients if activeTab is 'ingredients' */}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) =>
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

// Styled components for the Recipe component
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: pink;
  background white;
  border: 2px solid pink;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

// Export the Recipe component as the default export
export default Recipe;
