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
          <img src="/images/add.png" alt="add icon" />
        </li>
        <li>
          <img src="/images/calendar.png" alt="calendar icon" />
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
