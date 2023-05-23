import React from "react";
import Text from "../Text";
import { CheckboxLabelProps } from "./Checkbox.types";
import { StyledLabel } from "./Checkbox.styles";
import PropType from "prop-types";

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ id, label = "Pick up laundry", ...restProps }) => {
	return (
		<StyledLabel htmlFor={id} {...restProps}>
			<Text tag="span" typescale="labelLarge" color="onSurface">
				{label}
			</Text>
		</StyledLabel>
	);
};

CheckboxLabel.propTypes = {
	label: PropType.string,
};

export default CheckboxLabel;
