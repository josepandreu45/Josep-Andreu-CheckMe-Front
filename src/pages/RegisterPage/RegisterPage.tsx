import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #2b70e4;
`;

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
