import styled from "styled-components";

const CheckDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f5f8fa;
  align-items: center;
  color: #023e8a;
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
  .edit img {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    background-color: #f5f8fa;
    align-items: center;
    color: #023e8a;
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
      padding: 15px;

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
      flex: 2;
    }
  }
`;

export default CheckDetailContainer;
