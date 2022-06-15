import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When its rendered", () => {
    test("Then it should render 3 li", () => {
      const expectedLength = 3;

      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );

      const receivedResult = screen.getAllByRole("listitem");

      expect(receivedResult).toHaveLength(expectedLength);
    });
  });
  describe("When the navlink anchor is clicked", () => {
    test("Then a toTop function will be called", () => {
      const toTop = (window.scrollTo = jest.fn());

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </Provider>
      );

      const link = screen.getByAltText("home icon");
      userEvent.click(link);

      expect(toTop).toHaveBeenCalled();
    });
  });
});
