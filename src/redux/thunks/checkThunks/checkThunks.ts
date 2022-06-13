import axios from "axios";
import {
  correctAction,
  setLoadingOn,
  setLoadingOff,
} from "../../../modals/modals";
import { ICheck } from "../../../types/checkTypes";

import {
  createCheckActionCreator,
  deleteCheckActionCreator,
  editCheckActionCreator,
  loadChecksActionCreator,
} from "../../features/checksSlice/checksSlice";
import { loadOneCheckActionCreator } from "../../features/oneCheckSlice/oneCheckSlice";
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
    setLoadingOn("LOADING...");

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

export const getOneCheckThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const { data: check } = await axios.get(
        `${process.env.REACT_APP_API_URL}checks/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(loadOneCheckActionCreator(check));
    }
  };

export const editCheckThunk =
  (idToEdit: string, formData: ICheck | number) =>
  async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const { data: check } = await axios.put(
        `${process.env.REACT_APP_API_URL}checks/${idToEdit}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(editCheckActionCreator(check));
      correctAction("Check Updated");
    }
  };
