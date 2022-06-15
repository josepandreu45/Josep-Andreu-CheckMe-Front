import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageContainer from "./RegisterPageStyle";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageContainer>
      <img src="images/CheckMe.png" alt="check logo" />
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
