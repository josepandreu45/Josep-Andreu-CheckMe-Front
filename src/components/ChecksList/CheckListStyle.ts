import styled from "styled-components";

const ChecksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 15px;
  gap: 10px;

  .page {
    padding-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      border: none;
      width: 70px;
      background-color: #2b70e4;
      color: #f5f8fa;
      font-size: 18px;
      cursor: pointer;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 15px;
    gap: 10px;
  }
  .page {
    padding-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      border: none;
      width: 70px;
      background-color: #2b70e4;
      color: #f5f8fa;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export default ChecksListContainer;
