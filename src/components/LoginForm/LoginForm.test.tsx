import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When the word 'bye' is written to the username input field", () => {
    test("Then the value of the username input field should be 'bye'", () => {
      const labelToFind = "Username";
      const inputText = "bye";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });
});
