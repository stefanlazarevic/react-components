import { createNamedContext } from "../../../helpers/context";
import { useDescendants, useDescendant } from "../../../packages/descendants";
import { useMemo, useRef } from "react";
import { getRandomString } from "../../../helpers";

const [TabsContext, useTabsContext] = createNamedContext("TabsContext", {});

export { TabsContext, useTabsContext };

export function useTabs(props: any) {
  const DOM = useDescendants();

  const {orientation, id} = props;

  const ID = useMemo(() => id || getRandomString(6), []);

  return {
    DOM,
    ID,
    orientation
  }
}

export function useTabList(props: any) {
  const {ID, orientation} = useTabsContext();

  const role = "tablist";

  return {
    ID,
    orientation,
    role
  };
}

export function useTab(props: any) {
  const context = useTabsContext();

  const ref = useRef<HTMLElement>(null);

  const index = useDescendant(ref.current, context.DOM);

  return {
    ...context,
    index,
    ref
  }
}