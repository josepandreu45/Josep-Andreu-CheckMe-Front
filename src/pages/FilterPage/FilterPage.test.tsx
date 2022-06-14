import { render, screen } from "@testing-library/react";
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
});
