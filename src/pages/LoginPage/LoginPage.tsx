import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: start;
  gap: 50px;
  align-items: center;
  background-color: #2b70e4;

  img {
    margin-top: 35px;
    height: 129px;
    width: 100px;
  }
`;

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageContainer>
      <img src="images/CheckMe.png" alt="check logo" />
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
