import { createSlice } from "@reduxjs/toolkit";
import { ICheck } from "../../../types/checkTypes";

interface ChecksState {
  checks: ICheck[];
}

const initialState: ChecksState = {
  checks: [],
};

const checkSlice = createSlice({
  name: "checks",
  initialState,
  reducers: {
    loadChecks: (checks, action): ChecksState => ({
      checks: [...action.payload],
    }),
  },
});

export const { loadChecks: loadChecksActionCreator } = checkSlice.actions;

export default checkSlice.reducer;
