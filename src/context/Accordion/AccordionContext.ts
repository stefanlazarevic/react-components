import { useCallback, useMemo, useState } from "react";
import { getRandomString } from "../../utils";
import { createNamedContext } from "../createNamedContext";
import IAccordionContext from "./AccordionContext.interface";

const [AccordionContextProvider, useAccordionContext] = createNamedContext<IAccordionContext>("AccordionContext");

export function createAccordionContext(props: any): IAccordionContext {
   const [expanded, setExpanded] = useState(false);

   const controls = useMemo(() => getRandomString(6), []);
   
   const expand = useCallback(function expandAccordion() {
      setExpanded(true);
   }, []);

   const collapse = useCallback(function collapseAccordion() {
      setExpanded(false);
   }, []);

   return {
      expanded,
      controls: controls,
      expand,
      collapse,
      disabled: props.disabled,
      dir: props.dir
   }
}

export { AccordionContextProvider, useAccordionContext }
