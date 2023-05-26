import styled from "@emotion/styled";
import { PageSection } from "../../shared/PageSection";
import { Github, Linkedin } from "../../shared/Icons";

const TitleSection: React.FC = () => {
  return (
    <PageSection id="titlesection">
      <Root>
        <Portrait src="me.jpeg" />
        <Bio>
          <BigText>
            Hi, my name is <strong>Keith</strong>.
          </BigText>
          <MedText>
            And I'm a <strong>software engineer</strong> based in NYC. Always
            learning, building, moving, dreaming.
          </MedText>
          <SocialIcons>
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
          </SocialIcons>
        </Bio>
      </Root>
    </PageSection>
  );
};

const Root = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 600px) {
    padding-top: 2rem;
    flex-direction: column;
  }
`;

const Portrait = styled.img`
  width: 200px;
  height: 200px;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  @media (min-width: 600px) {
    padding-left: 1rem;
  }
`;

const IconButton = styled.div`
  box-sizing: content-box;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  border-bottom: 2px solid rgb(0, 0, 0, 0);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    border-bottom: 2px solid #e5e5e0;
  }
`;

const BigText = styled.p`
  margin: auto;
  font-size: 2rem;
`;

const MedText = styled.p`
  margin: auto;
  font-size: 1.5rem;
`;

export default TitleSection;
