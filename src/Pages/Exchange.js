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
    <div>
      <h1 className="exchange-header">Exchange</h1>
      <ExchangeForm currencyList={currencyList} addResult={addResult} />
      <div className="btns">
        <Link to="/update" className="button-general">
          Update
        </Link>
        {/* <a
          target="_blank"
          href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
        >
          Policies
        </a> */}
        {/* <Link
          to={{
            pathname:
              "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
          }}
          target="_blank"
        /> */}
        <Link
          to="https://m.facebook.com/home.php"
          className="button-general"
          style={{ backgroundColor: "#4e9af1" }}
        >
          facebook
        </Link>
        {/* <a href="https://m.facebook.com/home.php" class="button3">
          facebook
        </a> */}
        <button
          onClick={() => setShow(!showList)}
          className="button-general"
          style={{ backgroundColor: "#f14ebd", padding: "0.3rem" }}
        >
          {showList ? "hide list" : "View your exchnge list"}
        </button>
      </div>
      {ShowExchangeList()}
    </div>
  );
}
