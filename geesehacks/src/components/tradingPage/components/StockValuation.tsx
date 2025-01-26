import React from "react";
import "./stockValuation.css";
import BuySellButton from "./BuySellButton.tsx";

interface StockValuationProps {
  price: number; // Price of the stock
  shares: number; // Number of shares
}

const StockValuation: React.FC<StockValuationProps> = ({ price, shares }) => {
  const total = (price * shares).toFixed(2); // Calculate total

  return (
    <div className="valuation-container">
      <div className="calculation-section">
        <div className="calculation-display">
          <div className="line-item">
            <span>Price:</span>
            <span>${price.toFixed(2)}</span>
          </div>
          <div className="line-item">
            <span>x</span>
            <span>{shares}</span>
          </div>
          <hr className="divider" />
          <div className="line-item">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
      </div>

      {/* BuySellButton will now be stacked below the calculation section */}
      <div className="button-container">
        <BuySellButton />
      </div>
    </div>
  );
};

export default StockValuation;
