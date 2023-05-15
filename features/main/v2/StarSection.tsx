import styled from "@emotion/styled";
import { IStarfieldParams, useStarfield } from "../../starfield/context";
import { PageSectionV2 } from "../../shared/PageSection";
import { useState } from "react";

interface ParamSliderProps {
  paramName: keyof IStarfieldParams;
  sliderMin: number;
  sliderMax: number;
  label?: string;
  step?: number;
}

const ParamSlider: React.FC<ParamSliderProps> = ({
  paramName,
  sliderMin,
  sliderMax,
  label,
  step,
}) => {
  const { [paramName]: paramValue, setParams } = useStarfield();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ [paramName]: +e.currentTarget.value });
  };
  return (
    <SliderContainer>
      {label && <SliderLabel>{label}</SliderLabel>}
      <input
        type="range"
        min={sliderMin}
        max={sliderMax}
        step={step || "any"}
        value={paramValue}
        onChange={onChange}
      />
    </SliderContainer>
  );
};

const StarSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <PageSectionV2 id="titlesection">
      <VFlex style={{ visibility: isVisible ? "visible" : "hidden" }}>
        <InfoText>
          The background of this page is a realistic 3D map of the stars we see
          in the night sky. I used Yale’s BSC5 dataset to approximate the color,
          position, and brightness of 2000 stars, which are rendered using
          WebGL.
        </InfoText>
        <InfoText>
          I may add interactive controls in the future, but for now here are a
          bunch of sliders for controlling the animation.
        </InfoText>
        <SliderArray>
          <SliderSection>
            <SliderSectionTitle>Rotation axis:</SliderSectionTitle>
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
          </SliderSection>
          <SliderSection>
            <SliderSectionTitle>Position offset:</SliderSectionTitle>
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
          </SliderSection>
          <SliderSection>
            <SliderSectionTitle>Rotation speed:</SliderSectionTitle>
            <ParamSlider
              paramName="sqrtRotPerMs"
              sliderMin={0}
              sliderMax={0.03}
            />
          </SliderSection>
          <SliderSection>
            <SliderSectionTitle>FOV:</SliderSectionTitle>
            <ParamSlider paramName="fov" sliderMin={0.1} sliderMax={0.5} />
          </SliderSection>
        </SliderArray>
      </VFlex>
      <VisibilityToggle onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? (
          <VisbilityIcon src="eye-off.svg" />
        ) : (
          <VisbilityIcon src="eye.svg" />
        )}
      </VisibilityToggle>
    </PageSectionV2>
  );
};

const VFlex = styled.div`
  width: 95%;
  max-width: 800px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
`;

const SliderArray = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-flow: row;
  gap: 1rem;
`;

const SliderSection = styled.div`
  padding: 0.5rem;
  border: 1px solid rgba(255, 239, 223, 0.4);
`;

const SliderSectionTitle = styled.div`
  padding-bottom: 0.5rem;
`;

const SliderContainer = styled.div`
  display: flex;
`;

const SliderLabel = styled.div`
  width: 1rem;
`;

const InfoText = styled.div`
  font-size: 20px;
`;

const VisibilityToggle = styled.div`
  position: sticky;
  bottom: 0;
  align-self: flex-end;
  margin: 2rem;
  padding: 8px;
  height: 52px;
  width: 52px;
  user-select: none;
  border: 2px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.1);
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const VisbilityIcon = styled.img`
  height: 100%;
  width: 100%;
`;

export default StarSection;
