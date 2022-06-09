import { mockListChecks } from "../../../mocks/mockListChecks";
import {
  createCheckActionCreator,
  deleteCheckActionCreator,
  loadChecksActionCreator,
} from "./checksSlice";
import checkReducer from "../checksSlice/checksSlice";
import { ICheck } from "../../../types/checkTypes";

const initialState: ICheck[] = [];

describe("Given the loadChecks function", () => {
  describe("When its invoked", () => {
    test("Then the initial state will contain the loaded checks", () => {
      const expectedState = mockListChecks;

      const action = loadChecksActionCreator(mockListChecks);
      const newState = checkReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("Given the deleteCheck function", () => {
  describe("When invoked with an id to delete", () => {
    test("Then the item will be deleted from the propierties list", () => {
      const initialState: ICheck[] = mockListChecks;

      const expectedState = [
        {
          username: mockListChecks[1].username,
          id: mockListChecks[1].id,
          title: mockListChecks[1].title,
          date: mockListChecks[1].date,
          times: mockListChecks[1].times,
          image: mockListChecks[1].image,
          description: mockListChecks[1].description,
          imageBackup: mockListChecks[1].imageBackup,
          owner: mockListChecks[1].owner,
        },
      ];

      const id = "1";

      const action = deleteCheckActionCreator(id);
      const newState = checkReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("Given the createCheck function", () => {
  describe("When its invoked", () => {
    test("Then the item will be create the check", () => {
      const initialState: ICheck[] = [mockListChecks[0]];
      const payLoad = mockListChecks[1];

      const expectedState = mockListChecks;

      const action = createCheckActionCreator(payLoad);
      const newState = checkReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
