import {
  mockDeleteChecks,
  mockListChecks,
} from "../../../mocks/mockListChecks";
import {
  createCheckActionCreator,
  deleteCheckActionCreator,
  editCheckActionCreator,
  loadChecksActionCreator,
} from "./checksSlice";
import { ICheck } from "../../../types/checkTypes";
import checkReducer from "./checksSlice";

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
      const initialState: ICheck[] = mockDeleteChecks;

      const expectedState = [
        {
          username: mockDeleteChecks[1].username,
          id: mockDeleteChecks[1].id,
          title: mockDeleteChecks[1].title,
          date: mockDeleteChecks[1].date,
          times: mockDeleteChecks[1].times,
          image: mockDeleteChecks[1].image,
          description: mockDeleteChecks[1].description,
          imageBackup: mockDeleteChecks[1].imageBackup,
          owner: mockDeleteChecks[1].owner,
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
      const initialState: ICheck[] = [mockDeleteChecks[0]];
      const payLoad = mockDeleteChecks[1];

      const expectedState = mockDeleteChecks;

      const action = createCheckActionCreator(payLoad);
      const newState = checkReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
  describe("When its invoked with a edit action with a two notes as a initial state and a edited note", () => {
    test("Then it should edit the note and change its title, content and category", () => {
      const editedCheck = {
        title: "edited check",
        description: "hola",
        times: 1,
        owner: "rocky",
        id: "1",
        date: new Date().toISOString().split("T")[0],
        image: "",
        imageBackup: "",
      };

      const action = editCheckActionCreator(editedCheck);

      const initialState = mockListChecks;

      const allChecks = checkReducer(initialState, action);

      expect(allChecks[0]).toHaveProperty("title", editedCheck.title);
      expect(allChecks[0]).toHaveProperty(
        "description",
        editedCheck.description
      );
      expect(allChecks[0]).toHaveProperty("times", editedCheck.times);
    });
  });
});
