import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import FilterPage from "./FilterPage";

describe("Given a FilterPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button'", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FilterPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedResult = screen.getByRole("button");

      expect(expectedResult).toBeInTheDocument();
    });
  });
  describe("When the previous button is clicked", () => {
    test("Then a action will be called", () => {
      window.scrollTo = jest.fn();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FilterPage />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);
    });
  });
});
