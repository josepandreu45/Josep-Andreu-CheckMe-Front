import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockListChecks from "../../mocks/mockListChecks";
import store from "../../redux/store/store";
import Header from "./Header";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppSelector: () => mockListChecks,
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should render a button with the text 'Logout'", () => {
      const text = "Logout";
      const role = "button";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByRole(role, { name: text });
      expect(label).toBeInTheDocument();
    });
  });
  describe("When the logout button is clicked", () => {
    test("Then a logout action will be dispatched", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
