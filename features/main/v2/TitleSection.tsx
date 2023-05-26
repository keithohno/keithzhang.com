import styled from "@emotion/styled";
import { PageSection } from "../../shared/PageSection";
import { Github, Linkedin } from "../../shared/Icons";

const TitleSection: React.FC = () => {
  return (
    <PageSection id="titlesection">
      <HFlex>
        <Portrait src="me.jpeg" />
        <VFlex>
          <BigText>
            Hi, my name is <strong>Keith</strong>.
          </BigText>
          <MedText>
            And I'm a <strong>software engineer</strong> based in NYC. Always
            learning, building, moving, dreaming.
          </MedText>
          <HFlexIcons>
            <a href="https://www.github.com/keithohno">
              <IconButton>
                <Github />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/keith-zhang">
              <IconButton>
                <Linkedin />
              </IconButton>
            </a>
          </HFlexIcons>
        </VFlex>
      </HFlex>
    </PageSection>
  );
};

const HFlexIcons = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media (min-width: 600px) {
    padding-right: 4rem;
  }
`;

const IconButton = styled.div`
  box-sizing: content-box;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px;
  border-bottom: 2px solid rgb(0, 0, 0, 0);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    border-bottom: 2px solid #fed;
  }
`;

const HFlex = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 2rem;
  @media (max-width: 600px) {
    padding-top: 2rem;
    // align-items: flex-start;
    flex-direction: column;
  }
`;

const Portrait = styled.img`
  width: 200px;
  height: 200px;
`;

const VFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: KoHo;
`;

const BigText = styled.p`
  font-weight: 500;
  margin: 3px;
  font-size: 2rem;
`;

const MedText = styled.p`
  font-weight: 500;
  margin: 3px;
  font-size: 1.5rem;
`;

export default TitleSection;
