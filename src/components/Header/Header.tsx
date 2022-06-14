import { NavLink, useNavigate } from "react-router-dom";
import { correctAction } from "../../modals/modals";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import HeaderContainer from "./HeaderStyle";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    navigate("/login");
    correctAction("LOGGED OUT");
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const userInfo = useAppSelector((state) => state.user);
  return (
    <HeaderContainer>
      <img className="logo" src="images/CheckMe.png" alt="check logo" />
      <nav>
        <NavLink to={"/home"} onClick={toTop}>
          HOME
        </NavLink>
        <NavLink to={"/add"} onClick={toTop}>
          NEW CHECK
        </NavLink>
        <NavLink to={"/search"} onClick={toTop}>
          CALENDAR
        </NavLink>
      </nav>
      <section className="user">
        <span>Hi {userInfo.username}</span>
        <button onClick={logout} className="logout">
          Logout
        </button>
      </section>
    </HeaderContainer>
  );
};

export default Header;
