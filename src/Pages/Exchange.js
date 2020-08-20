import React, { useState } from "react";
import ExchangeForm from "../Components/ExchangeForm";
import { Link } from "react-router-dom";
import ExchangeList from "../Components/ExchangeList";

export default function Exchange(props) {
  const { currencyList, results, addResult } = props;
  const [showList, setShow] = useState(false);

  const ShowExchangeList = () => {
    // debugger;
    if (showList) {
      return (
        <ExchangeList results={results} deleteExchange={props.deleteExchange} />
      );
    } else return "";
  };

  return (
    <div className="flex-col calc-container small-card">
      <h1 className="exchange-header">My exchange list</h1>
      <ExchangeForm currencyList={currencyList} addResult={addResult} />
      <div className="text-center m-3">
        <Link to="/update" className="badge badge-primary">
          Update
        </Link>
        <a
          href="https://www.xe.com/currencyconverter/"
          className="badge"
          style={{ backgroundColor: "#4e9af1", color: "#f4f4f4" }}
        >
          XE Currency Converter
        </a>
        <button
          onClick={() => setShow(!showList)}
          className="badge badge-light"
          style={{ color: "#dc35c6" }}
          // style={{ backgroundColor: "#f14ebd", padding: "0.3rem" }}
        >
          {results.length > 0
            ? showList
              ? "hide list"
              : "View your exchnge list"
            : "Enter exchange"}
        </button>
      </div>
      {ShowExchangeList()}
    </div>
  );
}
