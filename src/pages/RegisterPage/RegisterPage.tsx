import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: #2b70e4;

  img {
    height: 129px;
    width: 100px;
  }
`;

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageContainer>
      <img src="images/CheckMe.png" alt="check logo" />
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
