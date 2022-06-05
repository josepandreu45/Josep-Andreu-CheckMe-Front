import axios from "axios";
import { loadChecksActionCreator } from "../../features/checksSlice/checksSlice";
import { AppDispatch } from "../../store/store";

export const loadChecksThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { checks },
    } = await axios.get(`${process.env.REACT_APP_API_URL}checks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(loadChecksActionCreator(checks));
  }
};
