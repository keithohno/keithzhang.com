import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import TitleSection from "./titlesection";
import ProjectSection from "./projectsection";
import StarSection from "./starsection";
import ContactSection from "./contactsection";
import Tabs from "./tabs";

const Main: React.FC = () => {
  const [tabsShown, setTabsShown] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 500) setTabsShown(true);
  });
  return (
    <MainOuter>
      <MainInner>
        <TitleSection />
        <ProjectSection />
        <StarSection />
        <ContactSection />
      </MainInner>
      {tabsShown && <Tabs />}
    </MainOuter>
  );
};

const MainOuter = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const MainInner = styled.div`
  height: 100vh;
  max-width: calc(16vw + 300px);
  padding-left: 8px;
  padding-right: 8px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Main;
