import React from 'react';
import { AccordionContextProvider, createAccordionContext } from '../../context';

function Accordion(props: any) {
   const context = createAccordionContext(props);

   return (
      <AccordionContextProvider value={context}>
         {props.children}
      </AccordionContextProvider>
   )
}

Accordion.displayName = "Accordion";

export default Accordion;