import React from "react";

import "./Slider.scss";

import { SliderProps } from "./SliderProps";
import { Track } from "./components/Track/Track";
import { createSliderContext, SliderContextProvider } from "./context/SliderContext";
import { AfterSteps, BeforeSteps } from "./components/BeforeSteps/BeforeSteps";

function Slider(props: SliderProps) {
  const context = createSliderContext(props);
  
  return (
    <SliderContextProvider value={context}>
      <div className="Slider" aria-orientation={props.orientation}>
        <BeforeSteps />
        <Track />
        <AfterSteps />
      </div>
    </SliderContextProvider>
  );
};

Slider.defaultProps = {
  min: 0,
  value: 5,
  max: 10,
  orientation: "horizontal",
  steps: []
}

Slider.displayName = "Slider";

export default Slider;