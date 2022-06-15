import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageContainer from "./LoginPageStyle";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageContainer>
      <img src="images/CheckMe.png" alt="check logo" />
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
