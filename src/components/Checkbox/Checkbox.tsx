import React from "react";
import CheckboxInput from "./CheckboxInput";
import CheckboxLabel from "./CheckboxLabel";
import { useUniqueID } from "../../utils/useUniqueID";
import { CheckboxProps, checkboxState } from "./Checkbox.types";
import { StyledCheckbox } from "./Checkbox.styles";
import PropType from "prop-types";

const Checkbox: React.FC<CheckboxProps> = ({
	id,
	label = "Pickup laundry",
	error = false,
	disabled = false,
	onChange,
	...restProps
}) => {
	// Generate ID if user doesnt provide one.
	const generatedID = useUniqueID();
	const checkboxID = id || generatedID;

	return (
		<StyledCheckbox>
			<CheckboxInput id={checkboxID} error={error} disabled={disabled} onChange={onChange} {...restProps} />
			<CheckboxLabel htmlFor={checkboxID} label={label} />
		</StyledCheckbox>
	);
};

Checkbox.propTypes = {
	checkboxState: PropType.oneOf(checkboxState),
	error: PropType.bool,
	label: PropType.string,
};

export default Checkbox;
