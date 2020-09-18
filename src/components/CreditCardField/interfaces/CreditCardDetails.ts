export interface CreditCardDetails {
   /**
    * Updated credit card value.
    */
   value: string;
   /**
    * Validation flag which marks whether updated credit card value passed Luhn algorithm check or not.
    */
   isValid: boolean;
}