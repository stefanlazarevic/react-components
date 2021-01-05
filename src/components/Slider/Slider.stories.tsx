import React from "react";
import { Slider } from "./index";

export default {
	title: "Slider",
	component: Slider,
};

export const Template = (args: any) => <Slider {...args} />;

export const Vertical = () => {
	return (
		<Slider orientation="vertical" />
	)
}

export const BeforeLabels = () => {
	return (
		<Slider 
			orientation="vertical"
			min={0}
			max={10} 
			steps={[
				{label: '0', value: 0, placement: "before"},
				{label: '4', value: 4, placement: "before"},
				{label: '10', value: 10, placement: "before"}
			]}
		/>
	)
}

export const AfterLabels = () => {
	return (
		<Slider 
			orientation="vertical"
			min={0}
			max={10}
			steps={[
				{ label: '0', value: 0, placement: "after" },
				{ label: '6', value: 6, placement: "after" },
				{ label: '10', value: 10, placement: "after" }
			]}
		/>
	)
}