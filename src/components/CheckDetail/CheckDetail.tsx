import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

import CheckDetailContainer from "./CheckDetailStyle";

const CheckDetail = (): JSX.Element => {
  const { check } = useAppSelector((state) => state.check);
  const navigate = useNavigate();

  const editCheck = () => {
    navigate(`/edit/${check.id}`);
  };

  return (
    <CheckDetailContainer>
      <img src={check.image ? check.imageBackup : ""} alt="thing to check" />

      <section className="info">
        <span>{check.date}</span>
        <h2>{check.title}</h2>
        <span>Times checked:</span>
        <section className="times">
          <span>{check.times}</span>
        </section>
        <span>Description:</span>
        <p> {check.description} </p>
        <button className="edit" onClick={editCheck}>
          <img src="/images/edit.png" alt="edit button" />
        </button>
      </section>
    </CheckDetailContainer>
  );
};

export default CheckDetail;
