import React from 'react';
import './stockRectDown.css';
import './stockRectUp.css';

interface StockRectProps {
  ticker: string;
  price: number;
  isStockUp: boolean; // Boolean to determine stock movement
}

const StockRect: React.FC<StockRectProps> = ({ ticker, price, isStockUp }) => {
  return (
    <div className={isStockUp ? 'stock-rect-up' : 'stock-rect-down'}>
      <h1>{ticker}</h1>
      <p>${price}</p>
    </div>
  );
};

export default StockRect;
