import styled from "styled-components";

const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f5f8fa;
  align-items: center;
  color: #2b70e4;

  h2 {
    margin: 0px;
  }

  img {
    height: 100%;
    width: 115px;
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

  .detail {
    font-size: 16px;
    color: #2b70e4;
    cursor: pointer;
  }
  .info {
    display: flex;

    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 10px;
  }
  .actions {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    margin-right: 10px;
  }
  .times {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3px;
    font-size: 18px;
  }
  .times button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #f5f8fa;
    border-radius: 50%;
    background-color: #2b70e4;
    width: 30px;
    height: 30px;
    text-align: center;
  }

  @media (min-width: 600px) {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 500px;
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
      height: 100%;
      gap: 25px;
    }
    section.actions {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

export default CheckContainer;
