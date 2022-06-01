import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfoLogin } from "../../../types/userTypes";

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
    login: (
      user: UserState,
      action: PayloadAction<userInfoLogin>
    ): UserState => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export default userSlice.reducer;
