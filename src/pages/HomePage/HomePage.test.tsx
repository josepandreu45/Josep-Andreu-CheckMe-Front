import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store/store";
import HomePage from "./HomePage";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

describe("Given a HomePage component", () => {
  describe("When its rendered", () => {
    test("Then it should render an image", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );
      const receivedElement = screen.getByRole("main");

      expect(receivedElement).toBeInTheDocument();
    });
  });
  test("Then it should render 3 li", () => {
    const expectedLength = 3;

    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );

    const receivedResult = screen.getAllByRole("listitem");

    expect(receivedResult).toHaveLength(expectedLength);
  });
  test("Then it should render a button with the text 'Logout'", () => {
    const text = "Logout";
    const role = "button";

    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );

    const label = screen.getByRole(role, { name: text });
    expect(label).toBeInTheDocument();
  });
  describe("When the logout button is clicked", () => {
    test("Then a logout action will be dispatched", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
