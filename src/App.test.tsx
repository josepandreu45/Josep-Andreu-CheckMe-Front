import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByRole("img");

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
