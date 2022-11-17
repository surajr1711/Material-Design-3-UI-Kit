import React from "react";
import _ from "lodash";
import Typography from "../Typography";
import { StyledSegmentedButtons } from "./SegmentedButtons.styles";
import { SegmentedButtonsOptions } from "../../stubs/segmentedButtonsOptions";

interface SegmentedButtonsProps {
	buttonType?: "singleSelect" | "multiSelect";
	name: string; // name of set
	options: { label: string; icon?: string }[]; // array of min2 max5 options with label text and/or icon
	// default?: [''] // array of label text that will be set as default selected
	// density?: 0 | -1 | -2 | -3
}

const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({ buttonType, name, options }) => {
	// Determine if set of inputs will be radio or checkbox type
	const inputType: "radio" | "checkbox" = buttonType === "singleSelect" ? "radio" : "checkbox";

	// loop through options and create inputs/labels
	let Content;
	if (!options || options.length < 2 || options.length > 5) {
		Content = (
			<Typography tag="span" typescale="labelLarge" color="error">
				Between 2 to 5 options required
			</Typography>
		);
	} else {
		Content = options.map((option, key) => (
			<label key={key}>
				<input type={inputType} name={name} id={_.camelCase(option.label)} />
				<Typography label={option.label} tag="span" typescale="labelLarge" color="onSurface" />
			</label>
		));
	}
	return <StyledSegmentedButtons optionsNum={options.length}>{Content}</StyledSegmentedButtons>;
};

SegmentedButtons.defaultProps = {
	buttonType: "singleSelect",
	name: "options",
	options: SegmentedButtonsOptions,
};

export default SegmentedButtons;
