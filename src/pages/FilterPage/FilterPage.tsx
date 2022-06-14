import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Check from "../../components/Check/Check";
import Footer from "../../components/Footer/Footer";
import { useAppSelector } from "../../redux/hooks/hooks";
import { ICheck } from "../../types/checkTypes";

const FilterPageComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .filter {
    display: flex;
  }

  input {
    margin-top: 20px;
    height: 36px;
    width: 200px;
    text-align: center;
  }
  button {
    margin-top: 20px;
    height: 40px;
    width: 100px;
    text-align: center;
  }

  .checks {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

const FilterPage = (): JSX.Element => {
  const blankFields = {
    calendarDate: "",
  };

  const Allchecks: ICheck[] = useAppSelector((state) => state.checks);

  const [formDate, setFormDate] = useState(blankFields);
  const [checks, setChecks] = useState(Allchecks);

  const filter = () => {
    setChecks(checks.filter((check) => check.date === formDate.calendarDate));
    console.log(checks);
    return checks;
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormDate({
      ...formDate,
      [event.target.id]: event.target.value,
    });
    console.log(event.target.value);
  };
  console.log(setFormDate);

  return (
    <>
      <FilterPageComponent>
        <span className="filter">
          <input
            id="calendarDate"
            type="date"
            defaultValue={formDate.calendarDate}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={filter}>
            SEARCH
          </button>
        </span>
        <section className="checks">
          {checks !== Allchecks &&
            checks.map((check, index) => {
              return <Check key={index} check={check} />;
            })}
        </section>
      </FilterPageComponent>
      <Footer />
    </>
  );
};

export default FilterPage;
