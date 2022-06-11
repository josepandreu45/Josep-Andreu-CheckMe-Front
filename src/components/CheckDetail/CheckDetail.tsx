import { useAppSelector } from "../../redux/hooks/hooks";

import CheckDetailContainer from "./CheckDetailStyle";

const CheckDetail = (): JSX.Element => {
  const { check } = useAppSelector((state) => state.check);

  return (
    <CheckDetailContainer>
      <img src={check.image ? check.imageBackup : ""} alt="thing to check" />
      <span>{check.date}</span>
      <section className="info">
        <h2>{check.title}</h2>
        <span>Times checked:</span>
        <section className="times">
          <span>{check.times}</span>
        </section>
        <span>Description:</span>
        <p> {check.description} </p>
      </section>
    </CheckDetailContainer>
  );
};

export default CheckDetail;
