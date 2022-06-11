import styled from "styled-components";

const CheckDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 100%;
  border: 3px solid #2b70e4;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f5f8fa;
  align-items: center;
  color: #2b70e4;
  margin-top: 15px;

  h2 {
    margin: 0px;
  }

  img {
    width: 100%;
    height: 225px;
    object-fit: cover;
    margin-bottom: 10px;
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
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 15px;
  }

  @media (min-width: 600px) {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 500px;
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
      width: 100%;
      height: 250px;
      object-fit: cover;
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
      gap: 15px;
    }
  } ;
`;

export default CheckDetailContainer;
