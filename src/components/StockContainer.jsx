import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({stocks}) {
  const stock = stocks.map((s, idx)=> (
    <StockCard s={s} key={idx}/>
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {stock}
    </div>
  );
}
