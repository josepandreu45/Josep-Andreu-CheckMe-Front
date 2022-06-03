import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AccesControlUnlogged } from "./components/AccesControl/AccesControl";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { UserInfo } from "../src/types/userTypes";

function App() {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || logged) {
      const userInfo: UserInfo = jwtDecode(token as string);
      dispatch(loginActionCreator(userInfo));
      navigate("/home");
    }
  }, [dispatch, navigate, logged]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <AccesControlUnlogged>
              <HomePage />
            </AccesControlUnlogged>
          }
        />
      </Routes>
    </>
  );
}

export default App;
