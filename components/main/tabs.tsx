import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Tabs: React.FC = () => {
  const scrollFn = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Main>
      <TabArray>
        <img
          css={[Tab]}
          src="moon.png"
          onClick={() => {
            scrollFn("titlesection");
          }}
        ></img>
        <img
          css={[Tab]}
          src="earth.png"
          onClick={() => {
            scrollFn("projectsection");
          }}
        ></img>
        <img
          css={[Tab]}
          src="stars.png"
          onClick={() => {
            scrollFn("starsection");
          }}
        ></img>
        <img
          css={[Tab]}
          src="mars.png"
          onClick={() => {
            scrollFn("contactsection");
          }}
        ></img>
      </TabArray>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Tab = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  animation: pulse 3s infinite;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 rgba(255, 255, 255, 0);
    }
    50% {
      box-shadow: 0 0 rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
  }
`;

const TabArray = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(400px + 8vw);
  width: calc(60px + 4vw);
  flex-direction: column;
`;

export default Tabs;
