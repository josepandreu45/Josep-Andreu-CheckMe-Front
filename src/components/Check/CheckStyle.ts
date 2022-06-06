import styled from "styled-components";

const CheckContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  width: 350px;
  height: 140px;
  border: 3px solid #2b70e4;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f5f8fa;
  align-items: center;
  color: #2b70e4;

  h2 {
    margin: 0px;
  }

  img {
    width: 100px;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;

    img {
      width: 35px;
      height: 35px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .delete {
    height: 100%;

    display: flex;
    justify-content: end;
    align-items: flex-start;
  }
  label {
    margin-bottom: 5px;
  }
  input {
    text-align: center;
  }
  @media (min-width: 600px) {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 400px;
    border: 3px solid #2b70e4;
    border-radius: 15px;
    overflow: hidden;
    background-color: #f5f8fa;
    align-items: center;
    color: #2b70e4;
    margin-top: 25px;

    h2 {
      margin: 0px;
    }

    img {
      width: 250px;
    }

    button {
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;

      img {
        width: 35px;
        height: 35px;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      gap: 5px;
    }
    .delete {
      height: 100%;

      display: flex;
      justify-content: end;
      align-items: center;
    }
    label {
      margin-bottom: 5px;
    }
    input {
      text-align: center;
    }
  }
`;

export default CheckContainer;
