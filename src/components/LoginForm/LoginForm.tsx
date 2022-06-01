import { ChangeEvent, useState } from "react";
import LoginFormContainer from "./LoginFormStyle";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(blankFields);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <LoginFormContainer>
      <form noValidate autoComplete="off">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit" className="form-button">
          LOGIN
        </button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
