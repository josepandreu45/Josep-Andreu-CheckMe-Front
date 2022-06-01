import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Username'", () => {
      const expectedResult = "Username";

      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      const receivedResult = screen.getByLabelText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
