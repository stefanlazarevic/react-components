import React, { useLayoutEffect, useMemo } from 'react';

import './Track.scss';

import { useSliderContext } from '../../context/SliderContext';

export function Track(props: any) {
   const { track, orientation } = useSliderContext();

   useLayoutEffect(() => {
      console.log(track);
   }, []);

   return (
      <div 
         ref={track} 
         className="Track" 
         style={props.style} 
         aria-orientation={orientation}
      >
         {props.children}
      </div>
   )
}