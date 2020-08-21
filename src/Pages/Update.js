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
      <h2 className="text-center text-dark">UPDATE</h2>
      <table className="table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableCoins()}</tbody>
      </table>
      <br />
      <div className="all-center">
        <div className="p-2">
          Type{" "}
          <input
            style={{ marginRight: "2rem" }}
            name="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            autoFocus
            placeholder="enter your currency name"
          ></input>
          New Value{" "}
          <input
            name="value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="enter the rate value"
            className="form-control"
          ></input>{" "}
        </div>
        <div className="grid-2">
          <Link className="btn btn-dark" to="/">
            Back
          </Link>
          <button
            disabled={!type || !value}
            className="btn btn-primary"
            onClick={handelSubmit}
          >
            {type && value ? "Update" : "enter currency info"}
          </button>
        </div>
      </div>
    </div>
  );
}
