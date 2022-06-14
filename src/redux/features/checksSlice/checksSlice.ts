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
    editCheck: (checks, action: PayloadAction<INewCheck>) =>
      checks.map((check) =>
        check.id === action.payload.id ? action.payload : check
      ),

    searchCheck: (checks, action: PayloadAction<ICheck[]>): ICheck[] =>
      action.payload,
  },
});

export const {
  loadChecks: loadChecksActionCreator,
  deleteCheck: deleteCheckActionCreator,
  createCheck: createCheckActionCreator,
  editCheck: editCheckActionCreator,
  searchCheck: searchCheckActionCreator,
} = checkSlice.actions;

export default checkSlice.reducer;
