import jwtDecode from "jwt-decode";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccesControlUnlogged } from "./components/AccesControl/AccesControlUnlogged";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import { UserInfo } from "../src/types/userTypes";
import Page404 from "./pages/Page404/Page404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePage from "./pages/CreatePage/CreatePage";
import AccesControlLogged from "./components/AccesControl/AccesControlLogged";
import DetailPage from "./pages/DetailPage/DetailPage";
import EditPage from "./pages/EditPage/EditPage";
import Header from "./components/Header/Header";
import FilterPage from "./pages/FilterPage/FilterPage";

function App() {
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");
  try {
    const userData: UserInfo = jwtDecode(token as string);
    dispatch(loginActionCreator(userData));
  } catch {}

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
            <>
              <Header />
              <AccesControlUnlogged>
                <HomePage />
              </AccesControlUnlogged>
            </>
          }
        />

        <Route
          path="/add"
          element={
            <>
              <Header />
              <AccesControlUnlogged>
                <CreatePage />
              </AccesControlUnlogged>
            </>
          }
        />

        <Route
          path="/edit/:idCheck"
          element={
            <>
              <Header />
              <AccesControlUnlogged>
                <EditPage />
              </AccesControlUnlogged>
            </>
          }
        />

        <Route
          path="/detail/:idCheck"
          element={
            <>
              <Header />
              <AccesControlUnlogged>
                <DetailPage />
              </AccesControlUnlogged>
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Header />
              <AccesControlUnlogged>
                <FilterPage />
              </AccesControlUnlogged>
            </>
          }
        />

        <Route path="/*" element={<Page404 />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
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
