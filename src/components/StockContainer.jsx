import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({stocks, setStocks, portfolio, setPortfolio}) {
  const stock = stocks.map((s, idx)=> (
    <StockCard s={s} key={idx} stocks={stocks} portfolio={portfolio} setStocks={setStocks} setPortfolio={setPortfolio}/>
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {stock}
    </div>
  );
}
