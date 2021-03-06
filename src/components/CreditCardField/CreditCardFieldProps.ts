import { IComponentBase } from "../../interfaces";
import { CreditCardDetails } from "./interfaces/CreditCardDetails";

export interface CreditCardFieldProps extends IComponentBase {
   /**
    * 
    */
   value?: string;
   /**
    * 
    */
   type?: string;
   /**
    * 
    */
   placeholder?: string;
   /**
    * 
    */
   inputMode?: "numeric" | undefined;
   /**
    * 
    */
   pattern?: string;
   /**
    * 
    */
   invalid?: boolean;
   /**
    * 
    */
   autoComplete?: string;
   /**
    * 
    */
   maxLength?: number;
   /**
    * 
    */
   onChange?: (event: React.SyntheticEvent, details: CreditCardDetails) => void;
}