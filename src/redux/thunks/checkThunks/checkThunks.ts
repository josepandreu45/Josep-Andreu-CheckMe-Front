import axios from "axios";
import {
  correctAction,
  setLoadingOn,
  setLoadingOff,
} from "../../../modals/modals";

import {
  createCheckActionCreator,
  deleteCheckActionCreator,
  loadChecksActionCreator,
} from "../../features/checksSlice/checksSlice";
import { AppDispatch } from "../../store/store";

export const loadChecksThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    setLoadingOn("LOADING...");
    const {
      data: { checks },
    } = await axios.get(`${process.env.REACT_APP_API_URL}checks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(loadChecksActionCreator(checks));
    setLoadingOff();
  }
};

export const deleteCheckThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}checks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      dispatch(deleteCheckActionCreator(id));
      correctAction("CHECK DELETED");
    }
  };

export const createCheckThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const {
      data: { newCheck },
    } = await axios.post(`${process.env.REACT_APP_API_URL}checks`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "mutipart/form-data",
      },
    });

    dispatch(createCheckActionCreator(newCheck));
    correctAction("NEW CHECK CREATED");
  };
