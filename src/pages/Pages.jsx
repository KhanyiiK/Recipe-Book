// Import necessary modules and components
import React from 'react'; // Import React module
import Home from './Home'; // Import Home component
import Cuisine from './Cuisine'; // Import Cuisine component
import Searched from './Searched'; // Import Searched component
import Recipe from './Recipe'; // Import Recipe component
import { Route, Routes } from "react-router-dom"; // Import Route and Routes components from react-router-dom

// Define the Pages component
function Pages() {
  // Render the Pages component
  return (
    <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for displaying recipes based on cuisine type */}
        <Route path="/cuisine/:type" element={<Cuisine />} />
        {/* Route for displaying searched recipes */}
        <Route path="/searched/:search" element={<Searched />} />
        {/* Route for displaying recipe details */}
        <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

// Export the Pages component as the default export
export default Pages;
