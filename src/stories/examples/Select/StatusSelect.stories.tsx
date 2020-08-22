import React, { useState, useCallback } from "react";

import countries from "./countries.js";

import { Select } from "../../../components";

export default {
	title: "Example/Select/Task status select",
};

export const Template = () => {
  const options: any = countries;
  
  const [selected, setSelected] = useState(options[0]);

	const onChange = useCallback((event, selectedValue) => {
		setSelected(options.find((option: any) => option.value === selectedValue)!);
  }, [options]);

	return <Select options={options} value={selected.value} label={selected.label} onChange={onChange} />;
};