import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const labelToFind = "Username";
      const inputText = "hello";

      render(<RegisterForm />);

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });
});
