import React, { forwardRef, MutableRefObject, useEffect, useState } from 'react';

import './CreditCardField.scss';

import { CreditCardFieldProps } from './CreditCardFieldProps';

import { concatenate, isFunction, not, stripWhitespace } from '../../utils';
import { isNumericCharCode } from '../../utils';

const CreditCardField = forwardRef(function CreditCardFieldComponent(props: CreditCardFieldProps, ref: MutableRefObject<HTMLInputElement>) {
   const [invalid, setInvalid] = useState(false);

   const [internalValue, setInternalValue] = useState(format(props.value!));

   useEffect(() => {
      setInternalValue(format(props.value!));
   }, [props.value]);

   const className = concatenate("CreditCardField", props.className);

   function format(value: string) {
      return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
   }

   function onChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (isFunction(props.onChange)) {
         props.onChange(event, { value: stripWhitespace(event.target.value), isValid: !invalid});
      }
   }

   function validate(n: string) {
      if (typeof n !== "string" || !n.length) {
         return false;
      }

      let sum = 0;

      for (let i = n.length - 1; i > -1; i--) {
         let digit = n.charCodeAt(i) - 48;
         if (!((n.length - i) & 1)) {
            digit <<= 1;
         }
         sum += digit > 9 ? digit - 9 : digit;
      }

      return !(sum % 10);
   }

   function onBlur(event: React.FocusEvent<HTMLInputElement>) {
      const value = stripWhitespace(internalValue);

      if (value.trim() === '') {
         if (isFunction(props.onChange)) {
            setInvalid(false);
            props.onChange(event, { value, isValid: true });
         }
         return;
      }

      const isValid = validate(value);

      if (!isValid) {
         setInvalid(true);
      } else {
         setInvalid(false);
      }

      if (isFunction(props.onChange)) {
         props.onChange(event, { value, isValid });
      }
   }

   function onKeyPress(event: React.KeyboardEvent) {
      const { charCode } = event;

      if (not(isNumericCharCode(charCode))) {
         event.preventDefault();
      }
   }

   return (
      <input
         ref={ref}
         id={props.id}
         data-testid={props.testid}
         className={className}
         style={props.style}
         type={props.type} 
         inputMode={props.inputMode} 
         pattern={props.pattern}
         autoComplete={props.autoComplete} 
         maxLength={props.maxLength}
         placeholder={props.placeholder}
         aria-invalid={invalid}
         value={internalValue}
         onChange={onChange}
         onBlur={onBlur}
         onKeyPress={onKeyPress}
      />
   )
});

CreditCardField.defaultProps = {
   value: "",
   type: "tel",
   inputMode: "numeric",
   pattern: "[0-9\s]{13,19}",
   autoComplete: "cc-number",
   maxLength: 19,
   placeholder: "xxxx xxxx xxxx xxxx"
}

export default CreditCardField;