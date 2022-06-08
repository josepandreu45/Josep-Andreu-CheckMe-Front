import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo, UserState } from "../../../types/userTypes";

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
    logout: () => ({
      name: "",
      username: "",
      id: "",
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
