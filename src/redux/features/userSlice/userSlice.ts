import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "../../../types/userTypes";

interface UserState {
  name: string;
  username: string;
  id: string;
  logged: boolean;
}

const initialState: UserState = {
  name: "",
  username: "",
  id: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
