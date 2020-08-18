import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Update(props) {
  const { updateCurrencies, currencyList } = props;

  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const validType = () => {
    let english = /^[A-Za-z]+$/;
    for (let i = 0; i < type.length; i++) {
      if (!english.test(type[i])) {
        alert("bad english");
        return false;
      }
    }
    return true;
  };

  const handelSubmit = () => {
    if (validType()) {
      updateCurrencies({ type: type.toUpperCase(), value: value });
    }
  };

  const renderTableCoins = () => {
    return currencyList.map((coin) => {
      const { type, value } = coin;
      return (
        <tr key={type}>
          <td>{type}</td>
          <td>{value}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = Object.keys(currencyList[0]);
    return header.map((k, i) => {
      return <th key={i}>{k.toUpperCase()}</th>;
    });
  };

  return (
    <div>
      <h2 style={{ color: "#9a4ef1" }}>UPDATE</h2>
      <table id="table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableCoins()}</tbody>
      </table>
      <br />
      <div className="inputs-update">
        Type{" "}
        <input
          name="type"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        New Value{" "}
        <input
          name="value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>{" "}
      </div>
      <div className="btns-update">
        <Link className="button-general" to="/">
          Back
        </Link>
        <button
          disabled={!type || !value}
          className="button-general"
          onClick={handelSubmit}
        >
          {type && value ? "Update" : "enter currency info"}
        </button>
      </div>
    </div>
  );
}
