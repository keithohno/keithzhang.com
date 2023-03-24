import styled from "@emotion/styled";
import { PageSection } from "../shared/PageSection";

const TitleSection: React.FC = () => {
  return (
    <PageSection id="titlesection">
      <Small>Hi! my name is</Small>
      <Big>Keith Zhang</Big>
      <Me src="/ME.png" />
      <Small>
        and I'm a software engineer based in NYC with a background in
        <strong> full stack web development</strong>.
      </Small>
      <Tiny>
        03/24: This website is a work in progress, please pardon my appearance!
      </Tiny>
    </PageSection>
  );
};

const Big = styled.div`
  font-family: KoHo;
  margin: 3px;
  font-size: calc(40px + 3vw);
  font-weight: 800;
`;

const Small = styled.p`
  font-family: KoHo;
  font-weight: 500;
  margin: 3px;
  font-size: calc(20px + 0.5vw);
`;

const Tiny = styled.p`
  margin: 20px;
  font-size: calc(10px + 0.2vw);
`;

const Me = styled.img`
  margin: 16px;
  width: calc(120px + 3vw);
  height: calc(120px + 3vw);
  border-radius: 50%;
`;

export default TitleSection;
