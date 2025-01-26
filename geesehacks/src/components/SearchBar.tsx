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


  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Input a stock ticker..."
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;