import React from 'react';
import './StockInput.css'; // Make sure you have the appropriate styles

interface StockInputProps {
  stockPrice: number; // Stock price passed as a prop
  setShares: React.Dispatch<React.SetStateAction<string>>; // Function to update shares in TradePage
}

const StockInput: React.FC<StockInputProps> = ({ stockPrice, setShares }) => {
  // Handle changes to the shares input
  const handleSharesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Allow only numeric input and the empty string (for clearing the input)
    if (value === '' || /^[0-9]+(\.[0-9]*)?$/.test(value)) {
      setShares(value); // Update the shares state in TradePage
    }
  };

  return (
    <div className="stock-input-card">
      <div className="shares-container">
        <label htmlFor="shares">Shares: </label>
        <input
          id="shares"
          type="text" // Use type="text" to allow full control over the input validation
          onChange={handleSharesChange}
          placeholder="Enter shares"
        />
      </div>
      <div className="price-container">
        <span>Stock Price:</span>
        <span className="price">${stockPrice}</span>
      </div>
    </div>
  );
};

export default StockInput;
