import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import {
  deleteCheckThunk,
  editCheckThunk,
} from "../../redux/thunks/checkThunks/checkThunks";
import { ICheck } from "../../types/checkTypes";
import CheckContainer from "./CheckStyle";

interface Props {
  check: ICheck;
}

const Check = ({
  check: { title, image, times, id: checkId, imageBackup, description, date },
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const stateFields = {
    title: title,
    times: times,
    description: description,
    image: image,
    imageBackup: imageBackup,
    id: checkId,
    date: date,
  };

  const handleDelete = (): void => {
    if (checkId) {
      dispatch(deleteCheckThunk(checkId));
    }
  };

  const goToDetails = (): void => {
    navigate(`/detail/${checkId}`);

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const incrementTimes = (): void => {
    if (checkId) {
      stateFields.times++;
      dispatch(editCheckThunk(checkId, stateFields));
    }
  };

  const decrementTimes = (): void => {
    if (checkId && stateFields.times >= 2) {
      stateFields.times--;
      dispatch(editCheckThunk(checkId, stateFields));
    }
  };

  return (
    <CheckContainer>
      <img
        src={image ? imageBackup : "/images/default-placeholder.png"}
        alt="thing to check"
      />
      <section className="info">
        <h2>{title}</h2>
        <span>Times checked:</span>
        <section className="times">
          <button onClick={decrementTimes}>-</button>
          <span>{times}</span>
          <button onClick={incrementTimes}>+</button>
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
