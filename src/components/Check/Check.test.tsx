import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockListChecks from "../../mocks/mockChecks";

import store from "../../redux/store/store";
import Check from "./Check";

describe("Given the Check component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one heading element", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Check check={mockListChecks[0]} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getByRole("heading");

      expect(result).toBeInTheDocument();
    });
  });
});
