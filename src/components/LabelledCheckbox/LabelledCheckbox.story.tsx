import React from 'react';
import LabelledCheckbox from './LabelledCheckbox';

export default {
   title: "LabelledCheckbox",
   component: LabelledCheckbox
}

export const Default = (...args: any) => <LabelledCheckbox {...args} />

export const WithChildren = () => {
   return (
      <LabelledCheckbox checked={true}>
         <strong>Formatted</strong>&nbsp;<em>checkbox</em>&nbsp;label
      </LabelledCheckbox>
   )
}

export const RTL = () => {
   return (
      <LabelledCheckbox checked={true} dir="rtl">
         <strong>Formatted</strong>&nbsp;<em>checkbox</em>&nbsp;label
      </LabelledCheckbox>
   )
}

export const MultilineLabel = () => {
   return (
      <LabelledCheckbox checked={false}>
         <span>Content line one</span><br />
         <span>Content line two</span><br />
         <span>Content line three</span>
      </LabelledCheckbox>
   )
}