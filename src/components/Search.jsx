// Import necessary modules and components
import styled from 'styled-components'; // Import styled-components for styling
import { useState } from 'react'; // Import useState hook from React
import { FaSearch } from 'react-icons/fa'; // Import FaSearch icon from react-icons/fa
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

// Define the Search component
function Search() {
    // State to store the input value
    const [input, setInput] = useState("");
    // Hook for navigating to a different route
    const navigate = useNavigate();

    // Function to handle form submission
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input); // Navigate to the searched route with the input value
    };

    // Render the Search component
    return (
        // Styled form with onSubmit event handler
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch> {/* Search icon */}
                {/* Input field to type search query */}
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    value={input}
                />
            </div>
        </FormStyle>
    );
}

// Styled components for the Search component
const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: white;
    }
`;

// Export the Search component as the default export
export default Search;
