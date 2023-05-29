import styled from "@emotion/styled";
import { IStarfieldParams, useStarfield } from "../../starfield/context";
import { PageSection } from "../../shared/PageSection";
import { useState } from "react";
import { Eye, EyeSlash } from "../../shared/Icons";
import { ParamSlider } from "../../starfield/ParamSlider";

const StarSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <PageSection id="starsection" noPadding>
      <Root>
        <InfoText
          aria-hidden={!isVisible}
          style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
          The background of this page is a realistic 3D star map. I used a
          public dataset (Yale BSC5) to approximate the position, color, and
          brightness of each star, all rendered with WebGL.
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
        <VisibilityToggle onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <EyeSlash /> : <Eye />}
        </VisibilityToggle>
      </Root>
    </PageSection>
  );
};

const Root = styled.div`
  width: 95%;
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

const VisibilityToggle = styled.div`
  position: sticky;
  bottom: 0;
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
