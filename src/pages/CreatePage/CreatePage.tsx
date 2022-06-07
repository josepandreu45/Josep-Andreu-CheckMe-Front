import styled from "styled-components";
import CreateForm from "../../components/CreateForm/CreateForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const CreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CreatePage = (): JSX.Element => {
  return (
    <>
      <CreatePageContainer />
      <Header />
      <CreateForm />
      <Footer />
    </>
  );
};

export default CreatePage;
