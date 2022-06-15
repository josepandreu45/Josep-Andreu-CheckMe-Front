import styled from "styled-components";

const FilterPageComponent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    background-color: #023e8a;
    min-height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 50px;
  }

  @media (min-width: 600px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #023e8a;
    main {
      background-color: #023e8a;
      height: 100%;
      width: 100%;
      display: flex;

      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export default FilterPageComponent;
