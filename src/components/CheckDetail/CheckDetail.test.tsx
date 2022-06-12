import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CheckDetail from "./CheckDetail";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given the CheckDetail component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one heading element", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CheckDetail />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getByRole("heading");

      expect(result).toBeInTheDocument();
    });
  });
  describe("when its clicked the button", () => {
    test("then it should call navigate", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CheckDetail />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
