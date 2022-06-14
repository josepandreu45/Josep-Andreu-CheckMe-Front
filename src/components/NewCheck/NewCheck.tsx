import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NewCheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f5f8fa;
  align-items: center;
  color: #2b70e4;
  img {
    height: 100%;
    width: 115px;
    object-fit: cover;
  }

  a {
    margin-right: 30px;
    font-size: 20px;
    color: #2b70e4;
    text-decoration: none;
  }
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 300px;
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
    background-color: #f5f8fa;
    align-items: center;
    color: #2b70e4;
    margin-top: 25px;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    a {
      margin-top: 100px;
      color: #2b70e4;
      text-decoration: none;
    }
  }
`;

const NewCheck = (): JSX.Element => {
  return (
    <NewCheckContainer>
      <img src="/images/default-placeholder.png" alt="" />
      <NavLink to={"/add"}>Add your first Check </NavLink>
    </NewCheckContainer>
  );
};

export default NewCheck;
