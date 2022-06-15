import { useEffect } from "react";

import { useParams } from "react-router-dom";

import CheckDetail from "../../components/CheckDetail/CheckDetail";
import Footer from "../../components/Footer/Footer";

import { useAppDispatch } from "../../redux/hooks/hooks";

import { getOneCheckThunk } from "../../redux/thunks/checkThunks/checkThunks";
import DetailPageContainer from "./DetailPageStyle";

const DetailPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { idCheck } = useParams();

  useEffect(() => {
    if (idCheck) {
      dispatch(getOneCheckThunk(idCheck));
    }
  }, [dispatch, idCheck]);

  return (
    <DetailPageContainer>
      <main>
        <CheckDetail />
      </main>
      <Footer />
    </DetailPageContainer>
  );
};

export default DetailPage;
