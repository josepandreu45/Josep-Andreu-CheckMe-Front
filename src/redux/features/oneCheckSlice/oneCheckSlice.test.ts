import { mockListChecks } from "../../../mocks/mockListChecks";
import { loadOneCheckActionCreator } from "./oneCheckSlice";
import oneCheckReducer from "./oneCheckSlice";
import { IDetail } from "../../../types/checkTypes";

describe("When its invoked with a setUserToShow action with a user", () => {
  test("Then it should return the same user at the userToShow propety of the object", () => {
    const action = loadOneCheckActionCreator(mockListChecks[0]);

    const initialState: IDetail = {
      check: {
        title: "",
        times: 1,
        image: "",
        imageBackup: "",
        description: "",
        owner: "",
        date: "",
        id: "",
      },
    };

    const { check } = oneCheckReducer(initialState, action);

    expect(check).toEqual(mockListChecks[0]);
  });
});
