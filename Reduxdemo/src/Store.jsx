import { configureStore } from "@reduxjs/toolkit";
import CounterData from "./ReduxToolkit/CounterData";

export default configureStore({
  reducer: {
    countervalue: CounterData,
  },
});
