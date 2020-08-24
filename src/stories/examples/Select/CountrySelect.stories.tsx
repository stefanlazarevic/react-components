import React, { useState, useCallback } from "react";

import countries from "./countries";

import { Select } from "../../../components";

export default {
	title: "Example/Select/Country Select",
};

export const Preview = () => {
  const options: any = countries;
  
  const [selected, setSelected] = useState(options[0]);

	const onChange = useCallback((event, selectedValue) => {
		setSelected(options.find((option: any) => option.value === selectedValue)!);
  }, [options]);

	return <Select options={options} value={selected.value} label={selected.label} onChange={onChange} />;
};