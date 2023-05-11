import styled from "@emotion/styled";
import { PageSectionV2 } from "../../shared/PageSection";

const TitleSection: React.FC = () => {
  return (
    <PageSectionV2 id="titlesection">
      <HFlex>
        <Portrait src="me.jpeg" />
        <VFlex>
          <BigText>
            Hi, my name is <strong>Keith</strong>.
          </BigText>
          <MedText>
            And I'm a <strong>software engineer</strong> based in NYC. Currently
            seeking new opportunities to solve complex problems, develop
            meaningful connections, and impact the world at large.
          </MedText>
        </VFlex>
      </HFlex>
    </PageSectionV2>
  );
};

const HFlex = styled.div`
  width: 95%;
  max-width: 800px;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 600px) {
    align-items: flex-start;
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
