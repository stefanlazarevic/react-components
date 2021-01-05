import React, { useCallback, useMemo } from 'react';

import './LabelledCheckbox.scss';

import { concatenate, getRandomString } from '../../utils';
import { Checkbox } from '../Checkbox';

import { LabelledCheckboxProps } from './LabelledCheckboxProps';

function LabelledCheckbox(props: LabelledCheckboxProps) {
   const checkboxId = useMemo(() => getRandomString(6), []);

   const className = concatenate("LabelledCheckbox", props.className);

   const renderLabel = useCallback(function renderCheckboxLabel() {
      return <label htmlFor={checkboxId} dir={props.dir} aria-invalid={props.invalid}>{props.children}</label>;
   }, [props.children, props.dir, props.invalid])

   return (
      <div data-testid={props.testid} className={className}>
         {props.dir === 'rtl' && renderLabel()}
         <Checkbox id={checkboxId} checked={props.checked} invalid={props.invalid} />
         {props.dir !== 'rtl' && renderLabel()}
      </div>
   )
}

LabelledCheckbox.defaultProps = {};

LabelledCheckbox.displayName = 'LabelledCheckbox';

export default LabelledCheckbox;