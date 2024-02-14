import { createSlice } from "@reduxjs/toolkit";
import { ICourse } from "@@app/Types/ICourse";
import { theme } from "@@app/Theme";

interface GlobalState {
  courses: ICourse[];
}

// Define the initial state using that type
const initialState: GlobalState = {
  courses: [
    {
      name: "caldif",
      color: theme.colors.red,
      final_grade: 15,
      id: "0",
      evaluations: [
        {
          name: "PC",
          weight: 0.5,
          grades: [],
          length: 3,
          maxGrade: 20,
        },
      ],
    },
    {
      name: "caldif",
      color: theme.colors.yellow,
      final_grade: 15,
      id: "0",
      evaluations: [
        {
          name: "PC",
          weight: 0.5,
          grades: [],
          length: 3,
          maxGrade: 20,
        },
      ],
    },
  ],
};

export const Global = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

//export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default Global.reducer;
