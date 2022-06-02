import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AccesControlUnlogged } from "./components/AccesControl/AccesControl";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useAppSelector } from "./redux/hooks/hooks";

function App() {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [navigate, logged]);

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
