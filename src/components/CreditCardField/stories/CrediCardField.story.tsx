import React from 'react';
import CreditCardField from '../CreditCardField';
import ControlledExample from './ControlledExample';

export default {
   title: "Credit Card Field",
   component: CreditCardField
}

export const Default = (args: any) => <CreditCardField {...args} />
Default.args = {
   value: "5555444433332222"
}

export const Controlled = () => <ControlledExample />