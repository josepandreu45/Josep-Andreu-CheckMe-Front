import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockListChecks } from "../../mocks/mockListChecks";
import ChecksList from "./ChecksList";

describe("Given a ChecksList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the titles of the two'", async () => {
      const checksMockSlice = createSlice({
        name: "checks",
        initialState: mockListChecks,
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
  describe("When the navlink anchor is clicked", () => {
    test("Then a toTop function will be called", () => {
      const action = (window.scrollTo = jest.fn());

      const checksMockSlice = createSlice({
        name: "checks",
        initialState: mockListChecks,
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { checks: checksMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <ChecksList />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getAllByRole("button");
      userEvent.click(button[7]);
      expect(action).toHaveBeenCalled();
    });
  });
});
