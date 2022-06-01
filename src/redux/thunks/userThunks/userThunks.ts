import axios from "axios";
import jwtDecode from "jwt-decode";

import { UserInfo, UserLogin, UserRegister } from "../../../types/userTypes";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

export const registerThunk =
  (userData: UserRegister) => async (dispatch: AppDispatch) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}users/register`,
      userData
    );
  };

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}users/login`,
      userData
    );

    const userInfo: UserInfo = jwtDecode(data.token);
    localStorage.setItem("token", data.token);

    dispatch(loginActionCreator(userInfo));
  };
