import { NavLink } from "react-router-dom";
import HeaderContainer from "./HeaderStyle";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <img className="logo" src="images/CheckMe.png" alt="check logo" />
      <nav>
        <NavLink to={"/home"}>HOME</NavLink>
        <NavLink to={"/calendar"}>CALENDAR</NavLink>
      </nav>
      <section className="user">
        <span>Hi user</span>
        <button className="logout">Logout</button>
      </section>
    </HeaderContainer>
  );
};

export default Header;
