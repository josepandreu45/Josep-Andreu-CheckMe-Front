import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export default userSlice.reducer;
