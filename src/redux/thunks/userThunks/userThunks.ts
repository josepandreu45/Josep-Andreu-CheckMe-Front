import axios from "axios";
import { UserData, ResponseData } from "../../types/userTypes";
import { AppDispatch } from "../../store/store";

export const registerThunk =
  (userData: UserData) => async (dispatch: AppDispatch) => {
    await axios.post<ResponseData>(
      `${process.env.REACT_APP_API_URL}users/register`,
      userData
    );
  };
