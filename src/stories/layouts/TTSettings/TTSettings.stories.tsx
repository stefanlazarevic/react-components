import React from "react";

import "./TTSettings.scss";

import {
	Dialog,
	Heading,
	Checkbox,
	Label,
	DialogHeader,
	RadioGroup,
	Radio,
	Select,
} from "../../../components";

export default {
  title: "Layouts/TTSettings",
};

export const TTSettings = () => {
  return (
    <Dialog className="TTSettingsDialog">
      <DialogHeader>
        <Heading level={6}><abbr title="Timed text">TT</abbr> Settings</Heading>
      </DialogHeader>
      <form>
        <div className="FormRow">
          <Checkbox id="tt-centering" checked={true} />
          <Label htmlFor="tt-centering">Centering</Label>
        </div>
        <div className="FormRow">
          <Checkbox id="tt-knp" />
          <Label htmlFor="tt-knp">KNP</Label>
        </div>
        <div className="FormRow">
          <Checkbox id="tt-line-wrap" />
          <Label htmlFor="tt-line-wrap">Line wrap</Label>
        </div>
        <div className="FormRow">
          <Checkbox id="tt-bi-timecode" checked={true} />
          <Label htmlFor="tt-bi-timecode"><abbr title="Burn In">BI</abbr> Timecode</Label>
        </div>
        <div className="FormRow Large">
          <Checkbox id="tt-collapse-box-tools" />
          <Label htmlFor="tt-collapse-box-tools">Collapse box tools</Label>
        </div>
        <div className="FormRow FormColumn Medium">
          <Heading className="ColumnPositionHeading" level={6} content="Editable column position" />
          <RadioGroup name="position" selectedValue="2">
            <Radio value="0" />
            <Radio value="1" />
            <Radio value="2" />
          </RadioGroup>
        </div>
        <div className="FormRow FormColumn Medium">
          <Label className="ColorSchemeLabel" htmlFor="color-scheme">Editor color scheme</Label>
          <Select id="color-scheme" options={[
            {label: 'Schema #1', value: "1"},
            {label: 'Schema #2', value: "2"},
            {label: 'Schema #3', value: "3"},
          ]} value="3" label="Schema #3" />
        </div>
      </form>
    </Dialog>
  )
};