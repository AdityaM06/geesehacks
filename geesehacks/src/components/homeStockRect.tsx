import React from 'react';
import './homeStockRect.css';


interface StockRectProps {
  ticker: string;
  price: number;
  isStockUp: boolean; 
}

const HomeStockRect: React.FC<StockRectProps> = ({ ticker, price, isStockUp }) => {
  return (
    <div className={isStockUp ? 'stock-rect-up' : 'stock-rect-down'}>
      <h1>{ticker}</h1>
      <p >${price}</p>
    </div>
  );
};

export default HomeStockRect;
