import styled from "styled-components";
const Page404Container = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #023e8a;

  .error {
    color: #023e8a;
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 30px;
    border: 2px solid #f5f8fa;
    border-radius: 15px;
    background-color: #f5f8fa;
  }
`;

export default Page404Container;
