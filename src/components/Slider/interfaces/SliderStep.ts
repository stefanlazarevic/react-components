import { ReactNodeLike } from "prop-types";

export interface SliderStep {
   /**
    * 
    */
   label: ReactNodeLike;
   /**
    * 
    */
   value: number;
   /**
    * 
    */
   placement: "before" | "after";
}