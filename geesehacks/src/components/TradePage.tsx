import React, { useState } from 'react';
import PolishedStockTrade from './PolishedStockTrade.tsx';
import BalanceDisplay from './Balance.tsx';
import StockInput from './StockInput.tsx';
import StockValuation from './StockValuation.tsx';

interface TradePageProps {
  ticker: string;
  companyName: string;
  price: number;
  percentChange: number;
  isStockUp: boolean;
  balance: number;
}

const TradePage: React.FC<TradePageProps> = ({
  ticker,
  companyName,
  price,
  percentChange,
  isStockUp,
  balance,
}) => {
  // Lift shares state here
  const [shares, setShares] = useState<string>(''); 

  return (
    <div>
      <PolishedStockTrade
        ticker={ticker}
        companyName={companyName}
        price={price}
        percentChange={percentChange}
        isStockUp={isStockUp}
      />
      <BalanceDisplay balance={balance} />
      
      {/* Pass down setShares to update shares in TradePage */}
      <StockInput stockPrice={price} setShares={setShares} />
      
      {/* Pass the updated shares value to StockValuation */}
      <StockValuation price={price} shares={parseInt(shares) || 0} />
    </div>
  );
};

export default TradePage;
