import axios from "axios";
import jwtDecode from "jwt-decode";
import { correctAction, wrongAction } from "../../../modals/modals";
import { UserInfo, UserLogin, UserRegister } from "../../../types/userTypes";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

export const registerThunk =
  (userData: UserRegister) => async (dispatch: AppDispatch) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}users/register`,
        userData
      );
      correctAction("USER CREATED");
    } catch {
      wrongAction("THIS USERNAME IS USED");
    }
  };

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        userData
      );

      const userInfo: UserInfo = jwtDecode(data.token);
      localStorage.setItem("token", data.token);

      dispatch(loginActionCreator(userInfo));
    } catch {
      wrongAction("WRONG USERNAME OR PASSWORD");
    }
  };
