import { ContentLayer, StateLayer } from "../InteractionLayers";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import Icon from "../Icon";
import { useUniqueID } from "../../utils/useUniqueID";
import { CheckboxInputProps, CheckboxState, checkboxState, checkboxStateIcons } from "./Checkbox.types";
import { CheckboxColors, CheckboxWrapper, StyledInput, checkboxColors } from "./Checkbox.styles";
import PropType from "prop-types";

const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
	(
		{
			id,
			// type = "checkbox", // type is always checkbox. seperate it from restprops
			checkboxState = "unselected",
			error = false,
			disabled = false,
			onChange,
			...restProps
		},
		ref
	) => {
		// Generate ID if user doesnt provide one.
		const generatedID = useUniqueID();
		const checkboxID = id || generatedID;

		// STATE
		// When user clicks on a checkbox it is either selected or unselected. It never becomes undeterminate by directly clicking on the checkbox. Undeterminate happens only by computation when a checkbox has a child checkbox. Therefor undeterminate can only be set by prop.
		// set Initial state
		const [state, setState] = useState<CheckboxState>(checkboxState);

		// when checkboxstate prop is updated change state
		useEffect(() => {
			setState(checkboxState);
		}, [checkboxState]);

		// STYLES
		const colorKey: keyof CheckboxColors = disabled ? "disabled" : error ? "error" : "noError";
		const iconColor = checkboxColors[colorKey][state];
		const icon = checkboxStateIcons[state];
		const stateLayerColor = checkboxColors[colorKey].selected;
		// To be passed to input prop. actual html input can only be boolean so if state is selected then set to true else if it is unselected or indeterminate then set to false.
		const checked = state === "selected" ? true : false;

		// EVENT HANDLERS
		const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
			// if disabled return
			if (disabled) return;
			// if current state is 'selected' then set to 'unselected'. otherwise if it is unselected or indeterminate set to 'selected'.
			setState((prev) => (prev === "selected" ? "unselected" : "selected"));
			// if user provides custom function run that as well
			if (onChange) onChange(e);
		};

		return (
			<CheckboxWrapper disabled={disabled}>
				<StateLayer stateLayerColor={stateLayerColor} />
				<ContentLayer>
					<Icon color={iconColor}>{icon}</Icon>
				</ContentLayer>
				<StyledInput
					ref={ref}
					id={checkboxID}
					type="checkbox"
					checked={checked}
					disabled={disabled}
					onChange={handleChange}
					{...restProps}
				/>
			</CheckboxWrapper>
		);
	}
);

CheckboxInput.propTypes = {
	checkboxState: PropType.oneOf(checkboxState),
	error: PropType.bool,
};

export default CheckboxInput;
