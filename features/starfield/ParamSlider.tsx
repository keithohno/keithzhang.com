import styled from "@emotion/styled";
import { IStarfieldParams, useStarfield } from "./context";
import React from "react";

interface ParamSliderProps {
  paramName: keyof IStarfieldParams;
  sliderMin: number;
  sliderMax: number;
  label?: string;
  step?: number;
}

export const ParamSlider: React.FC<ParamSliderProps> = ({
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

const SliderContainer = styled.div`
  display: flex;
`;

const SliderLabel = styled.div`
  width: 1rem;
`;
