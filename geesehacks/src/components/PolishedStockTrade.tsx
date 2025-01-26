import React from 'react';
import './polishedStockTrade.css';

interface PolishedStockTradeProps {
  ticker: string;
  companyName: string;
  price: number;
  percentChange: number; // The numerical value for percent change
  isStockUp: boolean;    // Determines whether the percentage change is positive (green) or negative (red)
}

const PolishedStockTrade: React.FC<PolishedStockTradeProps> = ({
  ticker,
  companyName,
  price,
  percentChange,
  isStockUp
}) => {
  return (
    <div className={`stock-card ${isStockUp ? 'stock-card-up' : 'stock-card-down'}`}>
      {/* Stock Ticker and Company Name */}
      <div className='company-info'>
        <h2 className="stock-ticker">{ticker}</h2>
        <p className="company-name">{companyName}</p>
      </div>
      
      <div className='price'>
        {/* Stock Price */}
        <p className="stock-price">${price}</p>
      
        {/* Percentage Change */}
        <p className={`percent-change ${isStockUp ? 'percent-up' : 'percent-down'}`}>
          {isStockUp ? '+' : ''}{percentChange}%
        </p>
      </div>
    </div>
  );
};

export default PolishedStockTrade;