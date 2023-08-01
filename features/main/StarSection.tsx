import styled from "@emotion/styled";
import { PageSection } from "../shared/PageSection";
import { useState } from "react";
import { Eye, EyeSlash } from "../shared/Icons";
import { ParamSlider } from "../starfield/ParamSlider";

const StarSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <PageSection id="starsection">
      <Root>
        <InfoText
          aria-hidden={!isVisible}
          style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
          The background of this page is a realistic 3D star map rendered with
          WebGL. I used a public dataset (Yale BSC5) to approximate the
          position, color, and brightness of each star.
        </InfoText>
        <InfoText
          aria-hidden={!isVisible}
          style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
          I may add interactive controls in the future, but for now here are a
          bunch of sliders and a visibility toggle:
        </InfoText>
        <SliderCardArray
          aria-hidden={!isVisible}
          style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
          <SliderCard>
            <SliderCardTitle>Rotation axis:</SliderCardTitle>
            <ParamSlider
              paramName="rotAxisX"
              sliderMin={-1}
              sliderMax={1}
              step={0.1}
              label="x"
            />
            <ParamSlider
              paramName="rotAxisY"
              sliderMin={-1}
              sliderMax={1}
              step={0.1}
              label="y"
            />
            <ParamSlider
              paramName="rotAxisZ"
              sliderMin={-1}
              sliderMax={1}
              step={0.1}
              label="z"
            />
          </SliderCard>
          <SliderCard>
            <SliderCardTitle>Position offset:</SliderCardTitle>
            <ParamSlider
              paramName="offsetX"
              sliderMin={-1}
              sliderMax={1}
              label="x"
            />
            <ParamSlider
              paramName="offsetY"
              sliderMin={-1}
              sliderMax={1}
              label="y"
            />
            <ParamSlider
              paramName="offsetZ"
              sliderMin={1}
              sliderMax={4}
              label="z"
            />
          </SliderCard>
          <SliderCard>
            <SliderCardTitle>Rotation speed:</SliderCardTitle>
            <ParamSlider
              paramName="sqrtRotPerMs"
              sliderMin={0}
              sliderMax={0.03}
            />
          </SliderCard>
          <SliderCard>
            <SliderCardTitle>FOV:</SliderCardTitle>
            <ParamSlider paramName="fov" sliderMin={0.1} sliderMax={0.5} />
          </SliderCard>
        </SliderCardArray>
        <BottomFillContainer>
          <VisibilityToggle onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? <EyeSlash /> : <Eye />}
          </VisibilityToggle>
        </BottomFillContainer>
      </Root>
    </PageSection>
  );
};

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const InfoText = styled.div`
  font-size: 1.25rem;
`;

const SliderCardArray = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-flow: row;
  gap: 1rem;
`;

const SliderCard = styled.div`
  padding: 0.5rem;
  border: 1px solid rgba(255, 239, 223, 0.4);
`;

const SliderCardTitle = styled.div`
  padding-bottom: 0.5rem;
`;

const BottomFillContainer = styled.div`
  position: sticky;
  flex-grow: 1;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;

const VisibilityToggle = styled.div`
padding: 8px;
height: 52px;
width: 52px;
display: flex;
align-items: center
user-select: none;
border: 2px solid rgba(255, 255, 255, 0.4);
background-color: rgba(255, 255, 255, 0.1);
:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
`;

export default StarSection;
