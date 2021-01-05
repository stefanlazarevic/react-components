import React, { useMemo } from 'react';

import { useAccordionContext } from '../../context';
import { isBoolean } from '../../utils';
import { Collapse } from '../Collapse';

function AccordionPanel(props: any) {
   const context = useAccordionContext();

   const hidden =  useMemo(() => isBoolean(context.expanded) ? !context.expanded : !props.hidden, [context.expanded, props.hidden]);
   const id =  useMemo(() => context.controls ? context.controls : props.id, [context.controls, props.id]);

   return (
      <Collapse id={id} hidden={hidden}>
         {props.children}
      </Collapse>
   )
}

AccordionPanel.displayName = "AccordionPanel";

export default AccordionPanel;