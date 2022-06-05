import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";

const Page404Container = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #2b70e4;

  .error {
    color: #2b70e4;
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
