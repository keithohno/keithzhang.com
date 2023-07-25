import styled from "@emotion/styled";

import { StarfieldProvider } from "../../starfield/context";
import Starfield from "../../starfield";
import TitleSection from "./TitleSection";
import ProjectSection from "./ProjectSection";
import StarSection from "./StarSection";

const Main: React.FC = () => {
  return (
    <StarfieldProvider>
      <OuterBorderBox>
        <InnerBorderBox>
          <ContentBox>
            <Navbar>
              <NavbarLeft>Keith Zhang</NavbarLeft>
              <NavbarRight>
                <NavbarLink href="#titlesection">bio</NavbarLink>
                <NavbarLink href="#projectsection">cv</NavbarLink>
                <NavbarLink href="#starsection">stars</NavbarLink>
              </NavbarRight>
            </Navbar>
            <BodyArea>
              <TitleSection />
              <ProjectSection />
              <StarSection />
            </BodyArea>
          </ContentBox>
          <Starfield />
        </InnerBorderBox>
      </OuterBorderBox>
    </StarfieldProvider>
  );
};

const NavbarLeft = styled.div`
  font-family: KoHo;
  font-size: 2rem;
  font-weight: 500;
`;

const NavbarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-family: KoHo;
  font-size: 1.5rem;
  font-weight: 400;
`;

const NavbarLink = styled.a`
  color: #e0e0d6;
  border-bottom: 2px solid rgb(0, 0, 0, 0);
  :hover {
    border-bottom: 2px solid #e5e5e0;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 10px;
`;

const BodyArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

const OuterBorderBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(black, #040e17);
  @media (min-width: 500px) {
    padding: 1.5rem;
  }
`;

const InnerBorderBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  @media (min-width: 500px) {
    border: 1px solid #8a8a85;
  }
`;

const ContentBox = styled.div`
  position: relative;
  z-index: 1;
  padding: 1rem 1.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #e0e0d6;
`;

export default Main;
