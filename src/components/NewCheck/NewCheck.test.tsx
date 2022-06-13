import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NewCheck from "./NewCheck";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should render a the text 'Add your first Check'", () => {
      const text = "Add your first Check";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <NewCheck />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getByText(text);
      expect(result).toBeInTheDocument();
    });
  });
});
