import {
  createCheckThunk,
  deleteCheckThunk,
  getOneCheckThunk,
  loadChecksThunk,
} from "./checkThunks";
import { server } from "../../../mocks/server";
import {
  deleteCheckActionCreator,
  loadChecksActionCreator,
} from "../../features/checksSlice/checksSlice";
import {
  mockListChecks,
  mockListCheckCreate,
} from "../../../mocks/mockListChecks";
import axios from "axios";
import { loadOneCheckActionCreator } from "../../features/oneCheckSlice/oneCheckSlice";

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

describe("Given a createCheckThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch createCheckActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.post = jest.fn().mockResolvedValue({
        data: { newCheck: { mockListCheckCreate } },
        status: 201,
      });

      const thunk = createCheckThunk(mockListCheckCreate);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadOneCheckThunk", () => {
  describe("When its called", () => {
    test("then it should dispatch loadOneCheckActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: mockListChecks[0], status: 200 });

      const action = loadOneCheckActionCreator(mockListChecks[0]);
      const thunk = getOneCheckThunk(mockListChecks[0].id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
