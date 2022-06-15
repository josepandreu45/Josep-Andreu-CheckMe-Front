import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadChecksThunk } from "../../redux/thunks/checkThunks/checkThunks";
import { ICheck } from "../../types/checkTypes";
import Check from "../Check/Check";
import CheckFilterContainer from "./CheckFilterStyle";

const CheckFilter = (): JSX.Element => {
  const blankFields = {
    calendarDate: "",
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadChecksThunk());
  }, [dispatch]);

  const Allchecks: ICheck[] = useAppSelector((state) => state.checks);

  const [formDate, setFormDate] = useState(blankFields);
  const [checks, setChecks] = useState(Allchecks);

  const filter = () => {
    setChecks(
      Allchecks.filter((check) => check.date === formDate.calendarDate)
    );
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormDate({
      ...formDate,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <CheckFilterContainer>
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
        <main>
          {checks < Allchecks &&
            checks.map((check) => <Check key={check.id} check={check} />)}
        </main>
      </CheckFilterContainer>
    </>
  );
};

export default CheckFilter;
