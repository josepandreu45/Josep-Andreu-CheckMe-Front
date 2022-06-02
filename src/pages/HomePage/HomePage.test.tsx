import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When its rendered", () => {
    test("Then it should render an image", () => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );
      const receivedElement = screen.getByRole("main");

      expect(receivedElement).toBeInTheDocument();
    });
  });
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
