import ChecksList from "../../components/ChecksList/ChecksList";
import Footer from "../../components/Footer/Footer";
import HomePageContainer from "./HomePageStyle";

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
