import React, { forwardRef, MutableRefObject, useEffect, useState } from 'react';

import './CreditCardField.scss';

import { CreditCardFieldProps } from './CreditCardFieldProps';

import { concatenate, isFunction, isValidLuhnNumber, stripWhitespace, trim } from '../../utils';
import { isNumericCharCode } from '../../utils';

const CreditCardField = forwardRef(function CreditCardFieldComponent(props: CreditCardFieldProps, ref: MutableRefObject<HTMLInputElement>) {
   const [invalid, setInvalid] = useState(false);

   const [internalValue, setInternalValue] = useState(format(props.value!));

   useEffect(function updateInternalValue() {
      setInternalValue(format(props.value!));
   }, [props.value]);

   const className = concatenate("CreditCardField", props.className);

   /**
    * Returns given value in "xxxx xxxx xxxx xxxx" format.
    * 
    * @param value 
    */
   function format(value: string) {
      return trim(value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '));
   }

   function onChange(event: React.ChangeEvent<HTMLInputElement>) {
      props.onChange!({ value: stripWhitespace(event.target.value), isValid: !invalid }, event);
   }

   /**
    * Validate credit card number using the Luhn algorithm.
    * 
    * @see https://en.wikipedia.org/wiki/Luhn_algorithm
    * @param n 
    */
   function validate(n: string | number) {
      return isValidLuhnNumber(n);
   }

   function onBlur(event: React.FocusEvent<HTMLInputElement>) {
      const value = stripWhitespace(internalValue);

      if (trim(value) === '') {
         setInvalid(false);
         props.onChange!({ value, isValid: true }, event);
         return;
      }

      const isValid = validate(value);

      if (!isValid) {
         setInvalid(true);
      } else {
         setInvalid(false);
      }

      props.onChange!({ value, isValid }, event);
   }

   function onKeyPress(event: React.KeyboardEvent) {
      const { charCode } = event;

      if (!(isNumericCharCode(charCode))) {
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
         onChange={isFunction(props.onChange) ? onChange : undefined}
         onBlur={isFunction(props.onChange) ? onBlur : undefined}
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