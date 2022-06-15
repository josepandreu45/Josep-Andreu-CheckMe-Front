import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Page404Container from "./Page404Style";

const Page404 = (): JSX.Element => {
  return (
    <>
      <Page404Container>
        <Header />
        <section className="error">
          <span>ERROR 404 </span>
          <span>PAGE NOT FOUND</span>
        </section>
        <Footer />
      </Page404Container>
    </>
  );
};

export default Page404;
