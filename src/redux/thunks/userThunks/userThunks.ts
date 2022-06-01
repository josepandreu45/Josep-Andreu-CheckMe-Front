import axios from "axios";
import { ResponseData, UserDataRegister } from "../../../types/userTypes";
import { AppDispatch } from "../../store/store";

export const registerThunk =
  (userData: UserDataRegister) => async (dispatch: AppDispatch) => {
    await axios.post<ResponseData>(
      `${process.env.REACT_APP_API_URL}users/register`,
      userData
    );
  };
