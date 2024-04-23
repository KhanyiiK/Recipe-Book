// Import the Veggie and Popular components
import Veggie from "../components/Veggie"; // Import Veggie component
import Popular from "../components/Popular"; // Import Popular component

// Import React module
import React from 'react';

// Define the Home component
function Home() {
  // Render the Home component
  return (
    <div>
        {/* Render the Veggie component */}
        <Veggie />
        {/* Render the Popular component */}
        <Popular/>
    </div>
  );
}

// Export the Home component as the default export
export default Home;
