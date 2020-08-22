import React, { useState, useCallback } from "react";
import { Select } from "../../../components";

export default {
	title: "Example/Select/Country select",
};

export const Template = (args) => {
  const options = [
		{ value: "open", label: "Open" },
		{ value: "reopened", label: "Reopened" },
		{ value: "progress", label: "In progress" },
		{ value: "hold", label: "On hold" },
		{ value: "completed", label: "Completed" },
  ];
  
  const [selected, setSelected] = useState(options[0]);

	const onChange = useCallback((event, selectedValue) => {
		setSelected(options.find(option => option.value === selectedValue)!);
  }, [options]);

	return <Select options={options} value={selected.value} label={selected.label} onChange={onChange} />;
};