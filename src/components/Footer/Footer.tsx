import { NavLink } from "react-router-dom";
import FooterContainer from "./FooterStyle";

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
};

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <NavLink to={"/home"} onClick={toTop}>
            <img src="/images/home.png" alt="home icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/add"} onClick={toTop}>
            <img src="/images/add.png" alt="add icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/search"} onClick={toTop}>
            <img src="/images/calendar.png" alt="calendar icon" />
          </NavLink>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
