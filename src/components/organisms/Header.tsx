import { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { pathData } from "../../assets/data/pathData";

export const Header: VFC = () => {
  return (
    <SComponentContainer>
      <Link to={pathData.top}>Top</Link>
      <Link to={pathData.recoilPage1}>RecoilPage1</Link>
      <Link to={pathData.recoilPage2}>RecoilPage2</Link>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  display: flex;
  gap: 10px;
`;
