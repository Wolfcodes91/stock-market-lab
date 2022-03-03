import React, { Component, useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'

export default function App() {
  const [stocks, setStocks] = useState([])

  useEffect(function () {
    async function getStocks() {
      const result = await fetch("http://localhost:3001/stocks");
      const stocks = await result.json()
      setStocks(stocks);
    }
    getStocks();
  }, []);

  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer stocks={stocks}/>
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}

