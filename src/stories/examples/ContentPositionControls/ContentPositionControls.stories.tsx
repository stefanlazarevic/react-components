import React from "react";

import "./ContentPositionControls.scss";

import {
	RadioGroup,
	RadioButton,
	AlignLeftIcon,
	AlignRightIcon,
	AlignCenterIcon,
	AlignTopIcon,
	AlignBottomIcon,
	AlignMiddleIcon,
} from "../../../components";

export default {
  title: "Example/Content placement controls",
};

export const Template = (args: any) => {
  return (
    <div className="ContentPositionControls">
      <RadioGroup name="horizontal" selectedValue="1">
        <RadioButton value="0" buttonClassName="IconButton" title="Align left" disabled>
          <AlignLeftIcon />
        </RadioButton>
        <RadioButton value="1" buttonClassName="IconButton" title="Align center">
          <AlignCenterIcon />
        </RadioButton>
        <RadioButton value="2" buttonClassName="IconButton" title="Align right">
          <AlignRightIcon />
        </RadioButton>
      </RadioGroup>

      <RadioGroup name="vertical" selectedValue="2">
        <RadioButton value="0" buttonClassName="IconButton" title="Align top">
          <AlignTopIcon />
        </RadioButton>
        <RadioButton value="1" buttonClassName="IconButton" title="Align middle">
          <AlignMiddleIcon />
        </RadioButton>
        <RadioButton value="2" buttonClassName="IconButton" title="Align bottom">
          <AlignBottomIcon />
        </RadioButton>
      </RadioGroup>
    </div>
  )
}