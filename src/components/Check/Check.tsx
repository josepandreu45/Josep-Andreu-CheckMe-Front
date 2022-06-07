import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteCheckThunk } from "../../redux/thunks/checkThunks/checkThunks";
import { IcheckSimple } from "../../types/checkTypes";
import CheckContainer from "./CheckStyle";

interface Props {
  check: IcheckSimple;
}

const Check = ({ check: { title, image, times, id } }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
    dispatch(deleteCheckThunk(id));
  };

  return (
    <CheckContainer>
      <img src={image} alt="thing to check" />
      <section className="info">
        <h2>{title}</h2>
        <span>Times checked:</span>
        <section className="times">
          <button>-</button>
          <span>{times}</span>
          <button>+</button>
        </section>
      </section>
      <section className="delete">
        <button onClick={handleDelete}>
          <img src="images/delete.png" alt="delete icon" />
        </button>
      </section>
    </CheckContainer>
  );
};

export default Check;
