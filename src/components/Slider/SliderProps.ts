import { IComponentBase } from "../../interfaces";
import { Orientation } from "../../types";
import { SliderStep } from "./interfaces/SliderStep";

export interface SliderProps extends IComponentBase {
   value?: number;
   min?: number;
   max?: number;
   steps?: SliderStep[];
   disabled?: boolean;
   name?: string;
   type?: string;
   orientation?: Orientation;
}