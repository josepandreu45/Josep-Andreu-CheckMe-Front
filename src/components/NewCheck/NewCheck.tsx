import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NewCheckContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 150px;
  border-radius: 15px;
  background-color: #f5f8fa;
  align-items: center;
  margin-top: 25px;
  a {
    font-size: 20px;
    color: #2b70e4;
    text-decoration: none;
  }
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    width: 350px;
    height: 150px;
    border-radius: 15px;
    background-color: #f5f8fa;
    align-items: center;
    margin-top: 25px;
    a {
      color: #2b70e4;
      text-decoration: none;
    }
  }
`;

const NewCheck = (): JSX.Element => {
  return (
    <NewCheckContainer>
      <NavLink to={"/add"}>Add your first Check </NavLink>
    </NewCheckContainer>
  );
};

export default NewCheck;
