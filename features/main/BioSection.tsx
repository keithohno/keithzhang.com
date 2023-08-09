import styled from "@emotion/styled";
import { PageSection } from "../shared/PageSection";
import { Github, Linkedin } from "../shared/Icons";

const BioSection: React.FC = () => {
  return (
    <PageSection id="biosection">
      <Root>
        <Portrait src="me.jpeg" />
        <Bio>
          <BigText>
            Hi, my name is <strong>Keith</strong>.
          </BigText>
          <MedText>
            ...and I'm a <strong>software engineer</strong> based in NYC. I love
            learning new things and building cool stuff, so if you have an
            exciting opportunity, feel free to reach out!
          </MedText>
          <MedText>
            Most recently, I've been{" "}
            <Link href="https://github.com/keithohno/learning/tree/main/ml">
              exploring GANs and VAEs for unsupervised learning
            </Link>
            .
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
            <a href="Keith_Zhang_Resume.pdf">
              <ResumeButton>Resume</ResumeButton>
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
  padding-bottom: 4rem;
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
    padding-right: 1rem;
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

const ResumeButton = styled.div`
  height: 2rem;
  margin-left: 0.5rem;
  padding: 0 0.5rem 2px 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e0;
  color: #07182a;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const BigText = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 300;
`;

const MedText = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 300;
`;

const Link = styled.a`
  font-weight: 400;
  color: #cdcdff;
  :hover {
    color: #dbdbff;
  }
`;

export default BioSection;
