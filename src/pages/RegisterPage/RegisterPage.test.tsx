import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a LoginPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Name'", () => {
      const expectedResult = "Name";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByLabelText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
