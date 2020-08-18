import React from "react";
import ExchangeItem from "./ExchangeItem";

export default function ExchangeList({ results, deleteExchange }) {
  return (
    <div>
      {results.map((item, i) => {
        return (
          <ExchangeItem
            item={item}
            displayN={i + 1}
            deleteExchange={() => deleteExchange(item.id)}
            key={i}
          />
        );
      })}
    </div>
  );
}
