import React, { useState } from 'react';
import './StockInput.css'; // Make sure you have the appropriate styles

interface StockInputProps {
  stockPrice: number; // Stock price passed as a prop
}

const StockInput: React.FC<StockInputProps> = ({ stockPrice }) => {
  const [shares, setShares] = useState<string>(''); // State for shares input

  // Handle changes to the shares input
  const handleSharesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Allow only numeric input and the empty string (for clearing the input)
    if (value === '' || /^[0-9]+(\.[0-9]*)?$/.test(value)) {
      setShares(value); // Update the shares state
    }
  };

  return (
    <div className="stock-input-card">
      <div className="shares-container">
        <label htmlFor="shares">Shares: </label>
        <input
          id="shares"
          type="text" // Use type="text" to allow full control over the input validation
          value={shares}
          onChange={handleSharesChange}
          placeholder="Enter shares"
        />
      </div>
      <div className="price-container">
        <p>Stock Price: ${stockPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default StockInput;