import RegisterFormContainer from "./styleRegisterForm";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormContainer>
      <form noValidate autoComplete="off">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" autoComplete="off" />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" autoComplete="off" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" autoComplete="off" />
        <button type="submit" className="form-button">
          CREATE ACCOUNT{" "}
        </button>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
