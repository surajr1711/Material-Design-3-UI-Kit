import React, { ChangeEventHandler } from "react";

import { StyledLabel } from "./Label.styles";
import Typography from "../Typography";
import Icon from "../Icon";

interface LabelProps {
	inputType?: "radio" | "checkbox";
	name: string; // name of the set of options
	id: string; // custom ID of input to access its value
	label: string; // the text that willb e displayed
	md3Icon: string; // name of the material design 3 icon
	checked: boolean; // if user wants to set initial value of label as checked
	showIcon: boolean;
	handleClick: ChangeEventHandler;
	// value // if user wants to provide custom value for input when form is received in backend
}

const Label: React.FC<LabelProps> = ({ inputType, name, id, label, md3Icon, checked, showIcon, handleClick }) => {
	return (
		<StyledLabel>
			<input type={inputType} name={name} id={id} checked={checked} onChange={handleClick} />
			<div className="content">
				{(showIcon || checked) && (
					<Icon color="onSurface" label={checked ? "check" : md3Icon} sizeInRems={1.125} variant="outlined" />
				)}
				<Typography label={label} tag="span" typescale="labelLarge" color="onSurface" />
			</div>
		</StyledLabel>
	);
};

Label.defaultProps = {
	inputType: "radio",
	name: "Options",
	id: "option1",
	label: "Option 1",
	// md3Icon: "settings", // should not have a default otherwise icon will be there even if you don't want it
	showIcon: false,
	checked: false,
};

export default Label;
