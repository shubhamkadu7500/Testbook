import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../ReduxToolkit/CounterData";

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countervalue.counter);

  return (
    <div className="container">
      <h1>product quantity</h1>
      <p>using redux toolkit</p>
      <a href="#" onClick={() => dispatch(decrement())}>
        {" "}
        -{" "}
      </a>
      <input type="text" value={data} />
      <a href="#" onClick={() => dispatch(increment())}>
        {" "}
        +{" "}
      </a>
    </div>
  );
}
