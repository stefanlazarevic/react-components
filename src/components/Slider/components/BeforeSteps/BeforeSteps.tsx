import React, { useMemo } from 'react';

import './BeforeSteps.scss';

import { useSliderContext } from '../../context/SliderContext';
import { toPercentage } from '../../../../utils';

export function BeforeSteps() {
   const {steps, orientation} = useSliderContext();

   return (
      <div className="BeforeSteps">
         {steps.map(step => {
            return (
               <span key={step.value} style={{top: toPercentage(step.value, 10) + '%'}} className="Step">
                  {step.label}
               </span>
            );
         })}
      </div>
   )
}

export function AfterSteps() {
   const {steps, orientation} = useSliderContext();

   return (
      <div className="AfterSteps">
         {steps.map(step => {
            return (
               <span key={step.value} style={{top: toPercentage(step.value, 10) + '%'}} className="Step">
                  {step.label}
               </span>
            );
         })}
      </div>
   )
}