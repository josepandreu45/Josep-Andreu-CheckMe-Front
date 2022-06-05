import styled from "styled-components";
import ChecksList from "../../components/ChecksList/ChecksList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    background-color: #2b70e4;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
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
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: end;
    }
    .add {
      visibility: visible;
      height: 60px;
      width: 60px;
      margin-right: 70px;
      margin-bottom: 50px;
    }
  }
`;

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <Header />
      <main>
        <img className="add" src="/images/add-desktop.png" alt="add icon" />
        <ChecksList />
      </main>

      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
