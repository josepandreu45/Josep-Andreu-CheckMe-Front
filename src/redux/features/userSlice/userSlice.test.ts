import { loginActionCreator, logoutActionCreator } from "./userSlice";
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

  describe("When it receives a logout action", () => {
    test("Then it should return logged to false", () => {
      const user = {
        id: "1",
        name: "hola",
        username: "hola",
        logged: true,
      };

      const expectedResult = false;

      const logout = logoutActionCreator();
      const userLoggout = userReducer(user, logout);

      expect(userLoggout.logged).toEqual(expectedResult);
    });
  });
});
