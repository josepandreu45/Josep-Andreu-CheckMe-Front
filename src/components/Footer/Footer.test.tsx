import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
});
