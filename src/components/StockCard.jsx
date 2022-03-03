import React from 'react'

export default function StockCard({s}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{s.name}</h5>
        <p className="card-text">{s.price}</p>
        { /* use a ternary to display a BUY or SELL button */}
      </div>
    </div>
  );
}
