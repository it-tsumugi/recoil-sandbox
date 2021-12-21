import { RecoilRoot } from "recoil";
import styled from "styled-components";

import { ComponentRouter } from "./router/ComponentsRouter";

function App() {
  return (
    <SComponentContainer>
      <RecoilRoot>
        <ComponentRouter />
      </RecoilRoot>
    </SComponentContainer>
  );
}

export default App;

const SComponentContainer = styled.div`
  background-color: skyblue;
  min-height: 100vh;
`;
