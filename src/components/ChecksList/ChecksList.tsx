import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadChecksThunk } from "../../redux/thunks/checkThunks/checkThunks";
import Check from "../Check/Check";

const ChecksListContainer = styled.div``;

const ChecksList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadChecksThunk());
  }, [dispatch]);

  const { checks } = useAppSelector((state) => state.checks);
  return (
    <ChecksListContainer>
      {checks.map((check, index) => {
        return <Check key={index} check={check} />;
      })}
    </ChecksListContainer>
  );
};

export default ChecksList;
