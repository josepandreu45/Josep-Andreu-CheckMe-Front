import { createSlice } from "@reduxjs/toolkit";
import { ICheck } from "../../../types/checkTypes";

interface ChecksState {
  allChecks: ICheck[];
}

const initialState: ChecksState = {
  allChecks: [],
};

const checkSlice = createSlice({
  name: "checks",
  initialState,
  reducers: {
    loadChecks: (checks, action): ChecksState => ({
      allChecks: [...action.payload],
    }),
    deleteCheck: (checks, action): ChecksState => ({
      allChecks: checks.allChecks.filter(
        (check: ICheck) => check.id !== action.payload
      ),
    }),
  },
});

export const {
  loadChecks: loadChecksActionCreator,
  deleteCheck: deleteCheckActionCreator,
} = checkSlice.actions;

export default checkSlice.reducer;
