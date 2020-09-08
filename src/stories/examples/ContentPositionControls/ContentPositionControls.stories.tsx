import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
	Tooltip,
} from "../../../components";

export default {
  title: "Example/Content placement controls",
};

export const Template = (args) => {
  return (
    <div className="ContentPositionControls">
      <RadioGroup name="horizontal" selectedValue="1">
          <Popup trigger={
            <RadioButton id="a-left" value="0" buttonClassName="IconButton" title="Align left" disabled>
              <AlignLeftIcon />
              <Tooltip content="Align center" parent="a-left" />
            </RadioButton>}
          >
            Test
          </Popup>
          <Popup trigger={
            <RadioButton id="a-center" value="1" buttonClassName="IconButton" title="Align center">
              <AlignCenterIcon />
              <Tooltip content="Align center" parent="a-center" />
            </RadioButton>}
          >
            Test
          </Popup>
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