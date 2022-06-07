import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockListChecks from "../../mocks/mockChecks";
import ChecksList from "./ChecksList";

describe("Given a ChecksList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the titles of the two'", async () => {
      const checksMockSlice = createSlice({
        name: "checks",
        initialState: { allChecks: mockListChecks },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { checks: checksMockSlice.reducer },
      });

      const firstTitle = mockListChecks[0].title;
      const secondTitle = mockListChecks[1].title;

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <ChecksList />
          </Provider>
        </BrowserRouter>
      );

      const receivedFirstTitle = screen.getByText(firstTitle);
      const receivedSecondTitle = screen.getByText(secondTitle);

      expect(receivedFirstTitle).toBeInTheDocument();
      expect(receivedSecondTitle).toBeInTheDocument();
    });
  });
});
