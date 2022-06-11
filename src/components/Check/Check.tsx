import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteCheckThunk } from "../../redux/thunks/checkThunks/checkThunks";
import { IcheckSimple } from "../../types/checkTypes";
import CheckContainer from "./CheckStyle";

interface Props {
  check: IcheckSimple;
}

const Check = ({
  check: { title, image, times, id, imageBackup },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = (): void => {
    if (id) {
      dispatch(deleteCheckThunk(id));
    }
  };

  const goToDetails = (): void => {
    navigate(`/detail/${id}`);
  };

  return (
    <CheckContainer>
      <img src={image ? imageBackup : ""} alt="thing to check" />
      <section className="info">
        <h2>{title}</h2>
        <span>Times checked:</span>
        <section className="times">
          <button>-</button>
          <span>{times}</span>
          <button>+</button>
        </section>
      </section>
      <section className="actions">
        <button onClick={handleDelete}>
          <img src="images/delete.png" alt="delete icon" />
        </button>
        <button className="detail" onClick={goToDetails}>
          Detail
        </button>
      </section>
    </CheckContainer>
  );
};

export default Check;
