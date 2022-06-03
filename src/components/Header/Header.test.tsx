import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

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
});
