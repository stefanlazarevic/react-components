export default interface IAccordionContext {
   /**
    * 
    */
   dir?: "auto" | "ltr" | "rtl";
   /**
    * 
    */
   controls?: string;
   /**
    * 
    */
   disabled?: boolean;
   /**
    * 
    */
   expanded: boolean;
   /**
    * 
    */
   expand: () => void;
   /**
    * 
    */
   collapse: () => void;
}