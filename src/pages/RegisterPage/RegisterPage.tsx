import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageContainer = styled.div`
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

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageContainer>
      <img src="images/CheckMe.png" alt="check logo" />
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
