import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import checkReducer from "../features/checksSlice/checksSlice";
import oneCheckReducer from "../features/oneCheckSlice/oneCheckSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    checks: checkReducer,
    check: oneCheckReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
