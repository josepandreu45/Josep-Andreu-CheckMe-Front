import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import checkReducer from "../features/checksSlice/checksSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    checks: checkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
