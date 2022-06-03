import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import store from "./redux/store/store";

jest.mock("jwt-decode", () => () => ({
  id: "1",
  name: "josep",
  username: "josep",
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given an App component", () => {
  describe("When it's rendered and a user is logged", () => {
    test("Then it should navigate to /home", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { username: "josep", logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });
  });

  describe("When it's rendered and a user is not logged", () => {
    test("Then it should render a text  'Register'", () => {
      const expectedText = "Register";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const expectedResult = screen.getByText(expectedText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});