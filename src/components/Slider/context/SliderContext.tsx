import { RefObject, useMemo, useRef } from "react";
import { createNamedContext } from "../../../context/createNamedContext";
import { Orientation } from "../../../types";
import { SliderStep } from "../interfaces/SliderStep";
import { SliderProps } from "../SliderProps";

export interface SliderContext {
   track: RefObject<HTMLDivElement>,
   orientation: Orientation,
   min: number;
   max: number;
   steps: SliderStep[];
}

const [SliderContextProvider, useSliderContext] = createNamedContext<SliderContext>("SliderContext");

export function createSliderContext(props: SliderProps) {
   const track = useRef<HTMLDivElement>(null);

   const orientation = props.orientation!;
   const min = props.min!;
   const max = props.max!;
   const steps = props.steps!;

   return {
      track,
      orientation,
      min,
      max,
      steps
   };
}

export {SliderContextProvider, useSliderContext};