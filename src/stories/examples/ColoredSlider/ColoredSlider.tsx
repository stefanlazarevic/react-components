import React, { useState, useCallback } from "react";

import "./ColoredSlider.scss";
import { AlphaChannelSlider, Swatch } from "../../../components";

export default function ColoredSlider() {
	const [value, setValue] = useState(50);

	const color = [244, 232, 10];

	const onChange = useCallback(({value}) => {
		setValue(value);
	}, []);

	return (
		<div className="ColoredSlider">
			<AlphaChannelSlider value={value} onChange={onChange} red={color[0]} blue={color[2]} green={color[1]} />
			<Swatch color={`rgba(${color.join(',')}, ${value / 100})`} />
		</div>
	);
}