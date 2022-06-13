import styled from "styled-components";
import CreateForm from "../../components/CreateForm/CreateForm";
import Footer from "../../components/Footer/Footer";

const CreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CreatePage = (): JSX.Element => {
  return (
    <>
      <CreatePageContainer>
        <CreateForm />
        <Footer />
      </CreatePageContainer>
    </>
  );
};

export default CreatePage;
