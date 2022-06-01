import { loginActionCreator } from "./userSlice";
import userReducer from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return user with property logged true", () => {
      const user = {
        name: "rocky",
        username: "rocky",
        logged: false,
        id: "",
      };

      const initialValue = { name: "", username: "", id: "", logged: false };

      const action = loginActionCreator(user);
      const receivedValue = userReducer(initialValue, action);

      expect(receivedValue.logged).toBe(true);
    });
  });
});
