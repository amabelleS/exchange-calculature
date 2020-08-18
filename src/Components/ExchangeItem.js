import React from "react";

export default function ExchangeItem(props) {
  return (
    <div className="item-container">
      <div className="details">
        <div>{`#` + props.displayN}</div>
        <div>
          <h1>
            {" From  "}
            <span>{props.item.from + `  `} </span>
            to {"   "}
            <span>{props.item.to} </span>
          </h1>

          <span>{props.item.amount + "=  "} </span>
          <span>{props.item.result} </span>
        </div>
      </div>
      <button
        className="button-general list-btn"
        style={{ backgroundColor: "red" }}
        onClick={props.deleteExchange}
      >
        X
      </button>
    </div>
  );
}
