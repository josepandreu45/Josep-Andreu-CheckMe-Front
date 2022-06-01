import axios from "axios";
import { AppDispatch } from "../../store/store";

export interface UserData {
  name: string;
  username: string;
  password: string;
}

export interface ResponseData {
  name: string;
  username: string;
  password: string;
}

export const registerThunk =
  (userData: UserData) => async (dispatch: AppDispatch) => {
    await axios.post<ResponseData>(
      `${process.env.REACT_APP_API_URL}users/register`,
      userData
    );
  };
