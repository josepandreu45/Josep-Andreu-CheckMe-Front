import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list with 3 items'", () => {
      const expectedResult = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getAllByRole("listitem");

      expect(receivedResult).toHaveLength(expectedResult);
    });
  });
});
