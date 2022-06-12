import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockListChecks } from "../../mocks/mockListChecks";

import store from "../../redux/store/store";
import Check from "./Check";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockNavigate,
}));

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
  describe("when its clicked the button", () => {
    test("then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Check check={mockListChecks[0]} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[2]);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  describe("when its clicked the button Details", () => {
    test("then it should call navigate", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Check check={mockListChecks[0]} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[3]);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
