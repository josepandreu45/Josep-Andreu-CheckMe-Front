import { createSlice } from "@reduxjs/toolkit";
import { IDetail } from "../../../types/checkTypes";

const initialState: IDetail = {
  check: {
    title: "",
    times: 1,
    image: "",
    imageBackup: "",
    description: "",
    owner: "",
    date: "",
    id: "",
  },
};

const oneCheckSlice = createSlice({
  name: "check",
  initialState,
  reducers: {
    loadOneCheck: (check, action): IDetail => ({
      check: { ...action.payload },
    }),
  },
});

export default oneCheckSlice.reducer;

export const { loadOneCheck: loadOneCheckActionCreator } =
  oneCheckSlice.actions;
