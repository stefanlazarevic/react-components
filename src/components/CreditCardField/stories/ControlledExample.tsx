import React, { useCallback, useState } from 'react';
import CreditCardField from '../CreditCardField';
import { CreditCardDetails } from '../interfaces/CreditCardDetails';

export default function Dynamic() {
   const [value, setValue] = useState("");
   const [hasError, setHasError] = useState(false);

   const onChange = useCallback((event, d: CreditCardDetails) => {
      setValue(d.value);

      if (!d.isValid) {
         setHasError(true);
      } else {
         setHasError(false);
      }
   }, []);

   return (
      <>
         <CreditCardField value={value} onChange={onChange} />
         {hasError && <small style={{color: "var(--invalid-color)", margin: "5px 0"}}>Invalid card number</small>}
      </>
   )
}