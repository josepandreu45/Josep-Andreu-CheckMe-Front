import styled from "styled-components";
import ChecksList from "../../components/ChecksList/ChecksList";
import Footer from "../../components/Footer/Footer";

const HomePageContainer = styled.div`
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
    align-items: start;
    justify-content: start;
    padding-bottom: 50px;
  }
  .add {
    visibility: hidden;
    height: 60px;
    width: 60px;
    margin-right: 70px;
    margin-bottom: 50px;
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

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <main>
        <ChecksList />
      </main>

      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
