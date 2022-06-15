import CreateForm from "../../components/CreateForm/CreateForm";
import Footer from "../../components/Footer/Footer";
import CreatePageContainer from "./CreatePageStyle";

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
