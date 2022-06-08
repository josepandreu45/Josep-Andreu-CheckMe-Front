import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICheck, INewCheck } from "../../../types/checkTypes";

const initialState: ICheck[] = [];

const checkSlice = createSlice({
  name: "checks",
  initialState,
  reducers: {
    loadChecks: (checks, action): ICheck[] => [...action.payload],

    deleteCheck: (checks, action): ICheck[] =>
      checks.filter((check) => check.id !== action.payload),

    createCheck: (checks, action: PayloadAction<INewCheck>): ICheck[] => [
      ...checks,
      action.payload,
    ],
  },
});

export const {
  loadChecks: loadChecksActionCreator,
  deleteCheck: deleteCheckActionCreator,
  createCheck: createCheckActionCreator,
} = checkSlice.actions;

export default checkSlice.reducer;
