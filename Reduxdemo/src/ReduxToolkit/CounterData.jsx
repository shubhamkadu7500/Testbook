import { createSlice } from "@reduxjs/toolkit";

export const CounterData = createSlice({
  name: "counter",
  initialState: {
    counter: 11,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
export const { increment, decrement } = CounterData.actions;

export default CounterData.reducer;
