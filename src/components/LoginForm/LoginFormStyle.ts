import styled from "styled-components";

const LoginFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #2b70e4;
    border-radius: 15px;
    height: 390px;
    width: 250px;
    background-color: #f5f8fa;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    color: #2b70e4;
  }

  input {
    height: 30px;
    margin-top: 15px;
    width: 202px;
    border: 1px solid #2b70e4;
  }

  .form-button {
    padding: 10px 45px;
    border: none;
    font-size: 0.8em;
    font-weight: bold;
    background-color: #2b70e4;
    color: #f5f8fa;
    cursor: pointer;
    width: 209px;
    margin-top: 25px;
  }
`;

export default LoginFormContainer;
