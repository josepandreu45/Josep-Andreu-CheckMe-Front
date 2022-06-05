import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Page404 from "./Page404";

describe("Given a Page404 component", () => {
  describe("When its rendered", () => {
    test("then it should show the text 'ERROR 404'", () => {
      const expectedResult = "ERROR 404";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Page404 />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
