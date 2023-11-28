import React from "react";

import { useSelector } from "react-redux";

export default function Amount() {
  const Totalquantity = useSelector((state) => state.countervalue.counter);
  const TotalAmount = Totalquantity * 1000;
  return (
    <div>
      <h1>The Amount Is {TotalAmount}</h1>
    </div>
  );
}
