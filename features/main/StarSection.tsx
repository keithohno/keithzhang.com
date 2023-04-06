import { PageSection } from "../shared/PageSection";
import { IStarfieldParams, useStarfield } from "../skyfield/context";
import React from "react";

interface ParamSliderProps {
  paramName: keyof IStarfieldParams;
  sliderMin: number;
  sliderMax: number;
  description: string;
}

const ParamSlider: React.FC<ParamSliderProps> = ({
  paramName,
  sliderMin,
  sliderMax,
  description,
}) => {
  const { [paramName]: paramValue, setParams } = useStarfield();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({ [paramName]: +e.currentTarget.value });
  };
  return (
    <p>
      {description}:{" "}
      <input
        type="range"
        min={sliderMin}
        max={sliderMax}
        step="any"
        value={paramValue}
        onChange={onChange}
      />
    </p>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <PageSection id="starsection">
      <p>
        The background of this page uses WebGL to render an accurate view of the
        night sky! I used Yale's BSC5 dataset to obtain the positions,
        magnitudes, and stellar classifications (colors) of 2000 stars.
      </p>
      <p>
        I'd like to add some actual controls in the future, but for now here's
        some sliders.
      </p>
      <ParamSlider
        paramName="zOffset"
        sliderMin={0}
        sliderMax={20}
        description="z-offset"
      />
      <ParamSlider
        paramName="rotAxisX"
        sliderMin={-1}
        sliderMax={1}
        description="rotation axis X"
      />
      <ParamSlider
        paramName="rotAxisY"
        sliderMin={-1}
        sliderMax={1}
        description="rotation axis Y"
      />
      <ParamSlider
        paramName="rotAxisZ"
        sliderMin={-1}
        sliderMax={1}
        description="rotation axis Z"
      />
      <ParamSlider
        paramName="rotPerMs"
        sliderMin={0}
        sliderMax={0.001}
        description="rotation speed"
      />
    </PageSection>
  );
};

export default ProjectSection;
