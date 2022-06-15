import styled from "styled-components";

const CheckFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 15px;
  gap: 10px;

  input {
    height: 36px;
    width: 200px;
    text-align: center;
  }
  button {
    height: 40px;
    width: 100px;
    text-align: center;
  }
  .filter {
    display: flex;
    gap: 5px;
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
      background-color: #023e8a;
      color: #f5f8fa;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export default CheckFilterContainer;
