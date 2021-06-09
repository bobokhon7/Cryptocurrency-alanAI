import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

const FetchedApi = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <h6 style={{ position: "absolute", right: "80px", paddingTop: "10px" }}>
        <strong>Hint:</strong> Ask Bitcoin price from Alan AI!!
      </h6>
      <div className="coin-search">
        <form>
          <input className="coin-input" onChange={handleChange} type="text" placeholder="Search" />
        </form>
      </div>
      <Card coins={filteredCoins} />
    </div>
  );
};

export default FetchedApi;
