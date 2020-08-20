import React from "react";

export default function ExchangeItem(props) {
  return (
    <div className="badge p-1">
      <div className="details">
        <div>{`#` + props.displayN}</div>

        <h4>
          {" from  "}
          <span>{props.item.from + `  `} </span>
          to {"   "}
          <span>{props.item.to} </span>
        </h4>
      </div>
      <div>
        <span>{props.item.amount + "=>  "} </span>
        <span>{props.item.result} </span>
        <button
          className="btn badge-danger text-primary"
          style={{ backgroundColor: "red" }}
          onClick={props.deleteExchange}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
