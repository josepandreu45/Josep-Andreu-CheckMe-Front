import { NavLink, useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
import HeaderContainer from "./HeaderStyle";

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppSelector: () => ({ name: "admin", id: "1234", logged: true }),
}));

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <img className="logo" src="images/CheckMe.png" alt="check logo" />
      <nav>
        <NavLink to={"/home"}>HOME</NavLink>
        <NavLink to={"/calendar"}>CALENDAR</NavLink>
      </nav>
      <section className="user">
        <span>Hi user</span>
        <button onClick={logout} className="logout">
          Logout
        </button>
      </section>
    </HeaderContainer>
  );
};

export default Header;
