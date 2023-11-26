import React from "react";
import { decNumber, incNumber } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const changetheNumber = useSelector((state) => state.changetheNumber);

  return (
    <>
      <a href="#" onClick={() => dispatch(decNumber())}>
        {" "}
        -{" "}
      </a>
      <input type="text" value={changetheNumber} />
      <a href="#" onClick={() => dispatch(incNumber())}>
        {" "}
        +{" "}
      </a>
    </>
  );
}
