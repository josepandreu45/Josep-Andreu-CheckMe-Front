import CreateForm from "../../components/CreateForm/CreateForm";
import Footer from "../../components/Footer/Footer";
import EditPageContainer from "./EditPageStyle";

const EditPage = (): JSX.Element => {
  return (
    <EditPageContainer>
      <CreateForm />
      <Footer />
    </EditPageContainer>
  );
};

export default EditPage;
