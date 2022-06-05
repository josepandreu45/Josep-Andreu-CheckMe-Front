import { render, screen } from "@testing-library/react";
import Check from "./Check";

describe("Given a Check component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading", () => {
      render(
        <Check
          title="horno apagado"
          times={3}
          image={
            "https://easelectric.es/8750-large_default/horno-8-funciones.jpg"
          }
        />
      );

      const receivedResult = screen.getByRole("heading");

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
