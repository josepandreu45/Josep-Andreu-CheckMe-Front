import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadChecksThunk } from "../../redux/thunks/checkThunks/checkThunks";
import { ICheck } from "../../types/checkTypes";
import Check from "../Check/Check";

const ChecksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 15px;
  gap: 10px;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 15px;
    gap: 10px;
  }
`;

const ChecksList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadChecksThunk());
  }, [dispatch]);

  const Allchecks: ICheck[] = useAppSelector((state) => state.checks);
  return (
    <ChecksListContainer>
      {Allchecks.map((check, index) => {
        return <Check key={index} check={check} />;
      })}
    </ChecksListContainer>
  );
};

export default ChecksList;
