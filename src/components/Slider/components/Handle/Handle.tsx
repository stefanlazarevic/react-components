import React from 'react';

import { SliderHandleProps } from './HandleProps';

import { concatenate } from '../../../../utils';

function SliderHandle(props: SliderHandleProps) {
   const className = concatenate("SliderHandle", props.className);

   return (
      <div id={props.id} data-testid={props.testid} className={className}  />
   )
}

SliderHandle.displayName = "SliderHandle";

export default SliderHandle;