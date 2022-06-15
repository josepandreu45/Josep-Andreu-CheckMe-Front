import { NavLink } from "react-router-dom";
import NewCheckContainer from "./NewCheckStyle";

const NewCheck = (): JSX.Element => {
  return (
    <NewCheckContainer>
      <img src="/images/default-placeholder.png" alt="" />
      <NavLink to={"/add"}>Add your first Check </NavLink>
    </NewCheckContainer>
  );
};

export default NewCheck;
