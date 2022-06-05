import CheckContainer from "./CheckStyle";

interface Props {
  title: string;
  times: number;

  image: string;
}

const Check = ({ title, times, image }: Props): JSX.Element => {
  return (
    <CheckContainer>
      <img src={image} alt="thing to check" />
      <section className="info">
        <h2>{title}</h2>
        <label htmlFor="times">Times checked:</label>
        <input
          min={0}
          max={10}
          placeholder=""
          type="number"
          id="times"
          value={times}
        />
      </section>
      <section className="delete">
        <button>
          <img src="images/delete.png" alt="delete icon" />
        </button>
      </section>
    </CheckContainer>
  );
};

export default Check;
