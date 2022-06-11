import jwtDecode from "jwt-decode";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccesControlUnlogged } from "./components/AccesControl/AccesControlUnlogged";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { UserInfo } from "../src/types/userTypes";
import Page404 from "./pages/Page404/Page404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePage from "./pages/CreatePage/CreatePage";
import AccesControlLogged from "./components/AccesControl/AccesControlLogged";
import { useEffect } from "react";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  const { logged } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || logged) {
      const userData: UserInfo = jwtDecode(token as string);
      dispatch(loginActionCreator(userData));
    }
  }, [dispatch, logged]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <AccesControlLogged>
              <LoginPage />
            </AccesControlLogged>
          }
        />
        <Route
          path="/register"
          element={
            <AccesControlLogged>
              <RegisterPage />
            </AccesControlLogged>
          }
        />
        <Route
          path="/home"
          element={
            <AccesControlUnlogged>
              <HomePage />
            </AccesControlUnlogged>
          }
        />
        <Route
          path="/add"
          element={
            <AccesControlUnlogged>
              <CreatePage />
            </AccesControlUnlogged>
          }
        />
        <Route path="/detail/:idCheck" element={<DetailPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
