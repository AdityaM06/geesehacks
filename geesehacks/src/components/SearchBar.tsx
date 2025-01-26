import React, { useState } from 'react';
import './SearchBar.css'; // Custom styles for the search bar

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  // Handle the input change (typing)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // Update the query state with the input
  };

  // Handle the Enter key press event
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Execute command when Enter key is pressed
      // Placeholder for the command
      console.log('Executing search for:', query);
    }
  };

  // Handle search button click event
  const handleSearchClick = () => {
    // Execute command when search button is clicked
    // Placeholder for the command
    console.log('Executing search for:', query);
  };

  return (
    <div className="search-bar-container">
      {/* Search bar with input and magnifying glass icon */}
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="search-input"
        />
        {/* Search button with Bootstrap magnifying glass icon inside the input field */}
        <button className="search-button" onClick={handleSearchClick}>
          <i className="bi bi-search search-icon"></i> {/* Bootstrap magnifying glass icon */}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;