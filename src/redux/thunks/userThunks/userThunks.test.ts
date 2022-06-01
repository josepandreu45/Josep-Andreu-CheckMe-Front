import { mockUserRegister } from "../../../mocks/mockUsers";
import { server } from "../../../mocks/server";
import { registerThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a registerThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", () => {
      const dispatch = jest.fn();

      const thunk = registerThunk(mockUserRegister);

      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
