import styled from "styled-components";
import ChecksList from "../../components/ChecksList/ChecksList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HomePageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    background-color: #2b70e4;
    height: 100%;
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    main {
      background-color: #2b70e4;
      height: 100vw;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: end;
    }
  }
`;

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Header />
      <main>
        <ChecksList />
      </main>

      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
