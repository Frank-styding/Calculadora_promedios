import { RootState } from "@@app/store";
import { createSlice } from "@reduxjs/toolkit";

interface GlobalState {}

// Define the initial state using that type
const initialState: GlobalState = {};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

//export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
