import React from "react";

import { useSelector } from "react-redux";

export default function SuperCoins() {
  const Totalquantity = useSelector((state) => state.countervalue.counter);
  const TotalSuperCoins = Totalquantity * 5;
  return (
    <div>
      <h1>The Super Coins are {TotalSuperCoins}</h1>
    </div>
  );
}
