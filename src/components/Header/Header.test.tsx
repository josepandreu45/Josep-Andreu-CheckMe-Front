import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should render a button with the text 'Logout'", () => {
      const text = "Logout";
      const role = "button";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const label = screen.getByRole(role, { name: text });
      expect(label).toBeInTheDocument();
    });
  });
});
