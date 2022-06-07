import { deleteCheckThunk, loadChecksThunk } from "./checkThunks";
import { server } from "../../../mocks/server";
import {
  deleteCheckActionCreator,
  loadChecksActionCreator,
} from "../../features/checksSlice/checksSlice";
import mockListChecks from "../../../mocks/mockChecks";
import axios from "axios";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadChecksThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch loadChecksActionCreator", async () => {
      const dispatch = jest.fn();
      const action = loadChecksActionCreator(mockListChecks);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { checks: mockListChecks },
        status: 200,
      });

      const thunk = loadChecksThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given the deleteCheckThunk function", () => {
  describe("When it's called with an id", () => {
    test("Then it should call dispatch with the loadChecks action with the checks received from the axios request", async () => {
      const id = "2";
      const dispatch = jest.fn();
      const action = deleteCheckActionCreator(id);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({ status: 200 });

      const thunk = deleteCheckThunk(id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe("When it's called with an existent id", () => {
    test("Then it should'nt call dispatch", async () => {
      const id = "2";
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.delete = jest.fn().mockResolvedValue({});

      const thunk = deleteCheckThunk(id);
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
