// Import necessary modules and components
// import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'; // Not used in the code
import {GiAvocado, GiBarbecue, GiCakeSlice, GiCheeseWedge} from 'react-icons/gi'; // Import icons from 'react-icons/gi'
import styled from "styled-components"; // Import styled-components for styling
import {NavLink} from 'react-router-dom'; // Import NavLink component for routing

// Define the Category component
function Category() {
  // Render the Category component
  return (
    // Render a list of cuisine categories
    <List>
        {/* NavLink for Italian cuisine */}
        <SLink to={'/cuisine/Italian'}>
            <GiAvocado /> {/* Icon for Italian cuisine */}
            <h4>Italian</h4> {/* Text for Italian cuisine */}
        </SLink>
        {/* NavLink for French cuisine */}
        <SLink to={'/cuisine/French'} >
            <GiCakeSlice  /> {/* Icon for French cuisine */}
            <h4>French</h4> {/* Text for French cuisine */}
        </SLink>
        {/* NavLink for Barbecue cuisine */}
        <SLink to={'/cuisine/Barbecue'}> 
            <GiBarbecue /> {/* Icon for Barbecue cuisine */}
            <h4>Barbecue</h4> {/* Text for Barbecue cuisine */}
        </SLink>
        {/* NavLink for Nordic cuisine */}
        <SLink to={'/cuisine/Nordic'}>
            <GiCheeseWedge /> {/* Icon for Nordic cuisine */}
            <h4>Nordic</h4> {/* Text for Nordic cuisine */}
        </SLink>
    </List>
  );
}

// Styled components for List and NavLink
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: pink;
        font-size: 0.8rem;
    }

    svg {
        color: pink;
        font-size: 1.5rem;
    }

    &:hover {
        background: linear-gradient(to right, blue, purple);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }
`;

// Export the Category component as the default export
export default Category;
