import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Tab: React.FC<{ src: string; scrollTo: string; tabText: string }> = (
  props
) => {
  const [hovered, setHovered] = useState(false);

  const scrollFn = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      css={tab}
    >
      <div css={expandableouter}>
        <div
          css={expandableinner}
          onClick={() => {
            scrollFn(props.scrollTo);
          }}
          style={{ marginLeft: hovered ? "0" : "-100%" }}
        >
          {props.tabText}
        </div>
      </div>
      <img
        css={icon}
        src={props.src}
        onClick={() => {
          scrollFn(props.scrollTo);
        }}
      ></img>
    </div>
  );
};

const Tabs: React.FC = () => {
  return (
    <Main>
      <TabArray>
        <Tab src="moon.png" scrollTo="titlesection" tabText="Bio" />
        <Tab src="earth.png" scrollTo="projectsection" tabText="Projects" />
        <Tab src="stars.png" scrollTo="starsection" tabText="Stars" />
        <Tab src="mars.png" scrollTo="contactsection" tabText="Contact" />
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

const TabArray = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(400px + 8vw);
  width: calc(60px + 4vw);
  flex-direction: column;
`;

const tab = css`
  position: relative;
  height: 80px;
  padding: 10px;
`;

const icon = css`
  position: absolute;
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

const expandableouter = css`
  position: absolute;
  left: 40px;
  overflow: hidden;
`;

const expandableinner = css`
  position: relative;
  width: 100%;
  height: 60px;
  padding-left: 50px;
  padding-right: 15px;

  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;

  border-radius: 0px 30px 30px 0px;
  background-color: rgb(255, 255, 255, 0.2);
  color: #cacac9;
  font-size: 20;
`;

export default Tabs;
