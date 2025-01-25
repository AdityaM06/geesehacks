import React from 'react';
import './stockRect.css';

// Define the types for your props using an interface
interface StockRectProps {
  ticker: string; // The ticker is a string
  price: number;  // The price is a number
}

// Functional component receiving props
const StockRect: React.FC<StockRectProps> = ({ ticker, price }) => {
  return (
    <div className="stock-rect">
      <h1>Stock Ticker: {ticker}</h1>
      <p>Price: ${price}</p>
    </div>
  );
};

export default StockRect;
