import { FormEvent } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteCheckThunk } from "../../redux/thunks/checkThunks/checkThunks";
import { IcheckSimple } from "../../types/checkTypes";
import CheckContainer from "./CheckStyle";

interface Props {
  check: IcheckSimple;
}

const Check = ({ check: { title, image, times, id } }: Props): JSX.Element => {
  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
  };

  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
    dispatch(deleteCheckThunk(id));
  };

  return (
    <CheckContainer>
      <img src={image} alt="thing to check" />
      <section className="info">
        <h2>{title}</h2>
        <label htmlFor="times">Times checked:</label>
        <input
          min={0}
          max={10}
          type="number"
          id="times"
          value={times}
          onChange={handleOnChange}
        />
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
