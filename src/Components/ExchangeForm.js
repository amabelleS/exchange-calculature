import React, { useState } from "react";
import uuid from "react-uuid";

export default function ExchangeForm(props) {
  const { currencyList, addResult } = props;
  let types = props.currencyList.map((c) => c.type);

  const [fromCurrency, setFromCurrency] = useState(types[0]);
  const [toCurrency, setToCurrency] = useState(types[1]);
  const [amount, setAmount] = useState();

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const getRates = (place) => {
    let rate = currencyList.find(({ type }) => type === place).value;
    return rate;
  };

  const handelExchange = () => {
    let result = (amount / getRates(fromCurrency)) * getRates(toCurrency);

    addResult({
      result: result,
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
      id: uuid(),
    });

    alert(result);
  };

  const options = () => {
    return types.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  const handelSelectFrom = (e) => {
    setFromCurrency(e.target.value);
  };
  const handelSelectTo = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div>
      <div className="flex-row">
        <label htmlFor="fromCurrency">From</label>
        <select
          name="fromCurrency"
          value={fromCurrency}
          onChange={(e) => handelSelectFrom(e)}
        >
          {" "}
          {options()}
        </select>{" "}
        <input
          className="input"
          type="number"
          value={amount}
          onChange={handleAmount}
          placeholder="Ex: 42"
        />
      </div>
      <br />
      <div className="flex-row">
        <label htmlFor="toCurrency">To</label>
        <select name="toCurrency" value={toCurrency} onChange={handelSelectTo}>
          {options()}
        </select>
      </div>

      <button
        onClick={handelExchange}
        className="button-general"
        disabled={!amount}
        style={{
          backgroundColor: "#74f14e",
          margin: "3rem",
        }}
      >
        START
      </button>
    </div>
  );
}
