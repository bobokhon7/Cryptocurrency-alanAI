import React from "react";
import { CryptoCard } from "react-ui-cards";
import { Container, CardCrytpo } from "./style";

const Card = ({ coins }) => {
  if (!coins) {
    return "Loading...";
  }
  return (
    <Container>
      {coins.map((value) => (
        <CardCrytpo key={value.id}>
          <CryptoCard
            currencyName={value.name}
            icon={<img src={value.image} />}
            currencyPrice={`$${value.current_price}`}
            currencyShortName={value.symbol}
            trend={`${value.price_change_percentage_24h}%`}
            trendDirection={`${value.price_change_percentage_24h}` > -1 ? 1 : -1}
            chartData={[22, 11]}
            chartColor="#243b55"
          />
        </CardCrytpo>
      ))}
    </Container>
  );
};

export default Card;
