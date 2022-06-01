import { ChangeEvent, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { loginThunk } from "../../redux/thunks/userThunks/userThunks";
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
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (formData.username === "" || formData.password === "") {
      return;
    }
    dispatch(loginThunk(formData));
    setFormData(blankFields);
  };
  return (
    <LoginFormContainer>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
        <NavLink to="/register">Register</NavLink>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
