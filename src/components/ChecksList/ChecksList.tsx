import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadChecksThunk } from "../../redux/thunks/checkThunks/checkThunks";
import { ICheck } from "../../types/checkTypes";
import Check from "../Check/Check";
import ChecksListContainer from "./CheckListStyle";

const ChecksList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadChecksThunk());
  }, [dispatch]);

  const Allchecks: ICheck[] = useAppSelector((state) => state.checks);

  let initialPage: ICheck[] = [];

  const [currentPage, setCurrentPage] = useState(initialPage);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentPage(Allchecks.slice(0, 5));
  }, [Allchecks]);

  useEffect(() => {
    setCurrentPage(Allchecks.slice(index, index + 5));
  }, [index, Allchecks]);

  return (
    <ChecksListContainer>
      {currentPage.map((check, index) => {
        return <Check key={index} check={check} />;
      })}
      <section className="page">
        <button
          onClick={() => {
            if (index >= 5) {
              setIndex(index - 5);
            }
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (index < Allchecks.length - 5) {
              setIndex(index + 5);
            }
          }}
        >
          Next
        </button>
      </section>
    </ChecksListContainer>
  );
};

export default ChecksList;
