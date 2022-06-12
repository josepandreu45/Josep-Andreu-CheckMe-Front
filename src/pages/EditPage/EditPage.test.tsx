import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditPage from "./EditPage";

describe("Given a EditPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a button with the text EDIT CHECK'", () => {
      const expectedResult = "EDIT CHECK";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
