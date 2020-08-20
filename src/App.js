import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exchange from "./Pages/Exchange";
import Update from "./Pages/Update";
import Navbar from "./Components/Layout/Navbar";

export default function App() {
  const initialCurrencies = [
    { type: "SHEKEL", value: 1 },
    { type: "DOLLAR", value: 4 },
    { type: "EURO", value: 5 },
  ];
  const [currencyList, setCurrency] = useState(initialCurrencies);
  const [results, setResults] = useState([]);

  const addResult = (result) => {
    setResults([...results, result]);
  };

  const deleteExchange = (id) => {
    let updetedResults = results.filter((result) => result.id !== id);
    setResults(updetedResults);
  };

  const isOnLIst = (type) => {
    // debugger;
    let flag = false;
    for (let i = 0; i < currencyList.length; i++) {
      if (currencyList[i].type === type) {
        flag = true;
      }
    }
    return flag;
  };

  const updateCurrencies = (newCoin) => {
    let updatedCoins;
    if (isOnLIst(newCoin.type)) {
      updatedCoins = currencyList.map((coin) =>
        coin.type === newCoin.type ? newCoin : coin
      );
      setCurrency(updatedCoins);
    } else {
      setCurrency([...currencyList, newCoin]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <Exchange
                currencyList={currencyList}
                addResult={addResult}
                results={results}
                deleteExchange={deleteExchange}
              />
            );
          }}
        />
        <Route
          exact
          path="/update"
          component={() => {
            return (
              <Update
                currencyList={currencyList}
                updateCurrencies={updateCurrencies}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}
