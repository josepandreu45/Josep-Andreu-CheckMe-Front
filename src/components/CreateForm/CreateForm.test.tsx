import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateForm from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When the word 'hello' is written to the title input field", () => {
    test("Then the value of the Check input field should be 'hello'", () => {
      const labelToFind = "Check";
      const inputText = "hello";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateForm />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByLabelText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toHaveValue(inputText);
    });
  });
});
