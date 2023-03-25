import styled from "@emotion/styled";

import TitleSection from "./TitleSection";
import ProjectSection from "./ProjectSection";
import StarSection from "./StarSection";
import ContactSection from "./ContactSection";
import Tabs from "./Tabs";

const Main: React.FC = () => {
  return (
    <Outer>
      <InnerLeft>
        <TitleSection />
        <ProjectSection />
        <StarSection />
        <ContactSection />
      </InnerLeft>
      <InnerRight>
        <Tabs />
      </InnerRight>
    </Outer>
  );
};

const Outer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
`;

const InnerLeft = styled.div`
  position: relative;
  width: calc(18vw + 18rem);
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

const InnerRight = styled.div`
  position: relative;
  width: calc(2vw + 6rem);
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Main;
