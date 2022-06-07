import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AccesControlUnlogged } from "./components/AccesControl/AccesControl";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import Page404 from "./pages/Page404/Page404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePage from "./pages/CreatePage/CreatePage";

function App() {
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
        <Route
          path="/add"
          element={
            <AccesControlUnlogged>
              <CreatePage />
            </AccesControlUnlogged>
          }
        />
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
