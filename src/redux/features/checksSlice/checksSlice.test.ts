import mockListChecks from "../../../mocks/mockChecks";
import {
  deleteCheckActionCreator,
  loadChecksActionCreator,
} from "./checksSlice";
import checkReducer from "../checksSlice/checksSlice";

const initialState = {
  allChecks: [],
};

describe("Given the loadChecks function", () => {
  describe("When its invoked", () => {
    test("Then the initial state will contain the loaded checks", () => {
      const expectedState = {
        allChecks: mockListChecks,
      };

      const action = loadChecksActionCreator(mockListChecks);
      const newState = checkReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("Given the deleteCheck function", () => {
  describe("When invoked with an id to delete", () => {
    test("Then the item will be deleted from the propierties list", () => {
      const initialState = {
        allChecks: mockListChecks,
      };

      const expectedState = {
        allChecks: [
          {
            id: mockListChecks[1].id,
            title: mockListChecks[1].title,
            checked: mockListChecks[1].checked,
            date: mockListChecks[1].date,
            times: mockListChecks[1].times,
            image: mockListChecks[1].image,
          },
        ],
      };

      const id = "1";

      const action = deleteCheckActionCreator(id);
      const newState = checkReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
