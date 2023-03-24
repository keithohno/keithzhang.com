import styled from "@emotion/styled";
import { PageSection } from "../shared/PageSection";

const TitleSection: React.FC = () => {
  return (
    <PageSection id="titlesection">
      <Small>Hi! my name is</Small>
      <Big>Keith Zhang</Big>
      <Me src="/ME.png" />
      <Small>
        I am a computer science graduate with an emphasis on
        <strong> full stack web development</strong>. I value
        <Yellow> excellence</Yellow>, <Pink>compassion</Pink>, and
        <Green> growth</Green> in all areas of work and of life.
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
  margin: 3px;
  font-size: calc(20px + 0.5vw);
`;

const Tiny = styled.p`
  margin: 20px;
  font-size: calc(10px + 0.2vw);
`;

const Green = styled.span`
  color: #c0ffcf;
`;

const Yellow = styled.span`
  color: #ffe0b6;
`;

const Pink = styled.span`
  color: #ffc6dc;
`;

const Me = styled.img`
  margin: 16px;
  width: calc(120px + 3vw);
  height: calc(120px + 3vw);
  border-radius: 50%;
`;

export default TitleSection;
