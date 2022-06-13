import styled from "styled-components";
import CreateForm from "../../components/CreateForm/CreateForm";
import Footer from "../../components/Footer/Footer";

const EditPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const EditPage = (): JSX.Element => {
  return (
    <EditPageContainer>
      <CreateForm />
      <Footer />
    </EditPageContainer>
  );
};

export default EditPage;
