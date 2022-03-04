import React from 'react';
import StockCard from './StockCard'

export default function PortfolioContainer({portfolio, setPortfolio, stocks, setStocks}) {
  const port = portfolio.map((s, idx)=> (
    <StockCard s={s} key={idx} portfolio={portfolio} setPortfolio={setPortfolio} stocks={stocks} setStocks={setStocks}/>
  ))
  return (
    <div>
      <h2>My Portfolio - { /* render the total value of the stocks in the portfolio here */}</h2>
      {port}
    </div>
  );
}
