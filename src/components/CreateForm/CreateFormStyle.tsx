import styled from "styled-components";

const CreateFormContainer = styled.div`
  width: 100%;
  height: 580px;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  background-color: #023e8a;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #023e8a;
    border-radius: 15px;
    height: 455px;
    width: 250px;
    background-color: #f5f8fa;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    color: #023e8a;
  }

  input {
    height: 30px;
    margin-top: 15px;
    width: 202px;
    border: 1px solid #023e8a;
  }
  textarea {
    height: 50px;
    margin-top: 15px;
    width: 202px;
    border: 1px solid #023e8a;
  }

  .times {
    text-align: center;
  }

  .form-button {
    padding: 10px 45px;
    border: none;
    font-size: 0.8em;
    font-weight: bold;
    background-color: #023e8a;
    color: #f5f8fa;
    cursor: pointer;
    width: 209px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .description {
    height: 100px;
  }
  .image {
    border: none;
    color: #023e8a;
  }
`;

export default CreateFormContainer;
