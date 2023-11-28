import React from "react";
import CartProduct from "./Flipkart/CartProduct";
import Amount from "./Flipkart/Amount";
import SuperCoins from "./Flipkart/SuperCoins";
export default function App() {
  return (
    <>
      <CartProduct />
      <hr />
      <Amount />
      <hr />
      <SuperCoins />
    </>
  );
}
