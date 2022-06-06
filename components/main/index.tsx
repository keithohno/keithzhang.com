import styled from "@emotion/styled";

import Title from "./title";

const Main: React.FC = () => {
  return (
    <MainOuter>
      <MainInner>
        <Title />
      </MainInner>
    </MainOuter>
  );
};

const MainOuter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainInner = styled.div`
  width: 100%;
  max-width: calc(50vw + 300px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
