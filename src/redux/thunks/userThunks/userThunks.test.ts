import { mockUser, mockUserRegister } from "../../../mocks/mockUsers";
import { server } from "../../../mocks/server";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({ username: "jota", id: "1" }));

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

describe("Given a LoginThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();
      const userData = {
        username: "jota",
        password: "jota",
      };

      const loginAction = loginActionCreator(mockUser);

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
