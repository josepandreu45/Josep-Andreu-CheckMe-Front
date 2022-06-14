import { NavLink } from "react-router-dom";
import FooterContainer from "./FooterStyle";

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <NavLink to={"/home"}>
            <img src="/images/home.png" alt="home icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/add"}>
            <img src="/images/add.png" alt="add icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/search"}>
            <img src="/images/calendar.png" alt="calendar icon" />
          </NavLink>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
