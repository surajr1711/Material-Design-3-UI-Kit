import React, { ChangeEventHandler, useState } from "react";
import Typography from "../Typography";
import { StyledSegmentedButtons, OptionsNumType, DensityInRemsType } from "./SegmentedButtons.styles";
import { optionsStub } from "../../stubs/segmentedButtons";
import Label from "./Label";

export interface OptionType {
	id: string; // custom ID of input to access its value
	label: string; // the text that willb e displayed
	md3Icon: string; // name of the material design 3 icon
	defaultChecked?: boolean; // if user wants to set initial value of label as checked
}

interface SegmentedButtonsProps {
	buttonsType?: "singleSelect" | "multiSelect";
	name: string; // name of the set of options
	options: OptionType[]; // array of min2 max5 options with label text and/or icon
	showIcon: boolean;
	density?: 0 | -1 | -2 | -3; // height of buttons
	// reset/clear option
}

const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({ buttonsType, name, options, showIcon, density }) => {
	// Determine if set of inputs will be radio or checkbox type
	const inputType: "radio" | "checkbox" = buttonsType === "singleSelect" ? "radio" : "checkbox";

	// calculate height of segmented buttons. Known in md3 guidelines as density
	const densityInRems: DensityInRemsType = (2.5 + density! * 0.25) as DensityInRemsType;

	// make an array of checked button ids if provided by user and set those ids as initial state.
	let initialState: string[] = options
		.map((option) => option.defaultChecked && option.id)
		.filter((id) => id !== undefined && id !== false) as string[];

	// if no default checked was provided, ie if initial state array is empty then set the first option id as checked.
	if (initialState.length === 0) initialState = [options[0].id];

	// if button type is radio, then initial state is only first value of array
	if (buttonsType === "singleSelect") initialState = [initialState[0]];

	const [checkedButtons, setCheckedButtons] = useState<string[]>(initialState);
	// console.log(checkedButtons);

	// function to set button as checked if its id is present in the checkedbuttons state array
	const isButtonChecked = (id: string): boolean => checkedButtons.includes(id);

	// when a button is clicked  update the state
	const handleClick: ChangeEventHandler<HTMLInputElement> = (e) => {
		console.dir(e.currentTarget);
		if (buttonsType === "singleSelect") {
			// if clicked button id is not in state array then set the id as the state array
			checkedButtons[0] !== e.currentTarget.id && setCheckedButtons([e.currentTarget.id]);
		} else {
			// in the case of multiselect
			// if the clicked button ID is in state array then remove it otherwise add it
			if (checkedButtons.includes(e.currentTarget.id)) {
				// and atleast 1 item should be checked always ie state array length min2, then you can remove
				checkedButtons.length >= 2 && setCheckedButtons(checkedButtons.filter((id) => e.currentTarget.id !== id));
			} else {
				setCheckedButtons([...checkedButtons, e.currentTarget.id]);
			}
		}
	};

	return (
		<StyledSegmentedButtons optionsNum={options.length as OptionsNumType} densityInRems={densityInRems}>
			{!options || options.length < 2 || options.length > 5 ? (
				<Typography tag="span" typescale="labelLarge" color="onError">
					Between 2 to 5 options required
				</Typography>
			) : (
				// else loop through options and create inputs/labels
				options.map((option, key) => (
					<Label
						key={key}
						name={name}
						inputType={inputType}
						label={option.label}
						id={option.id}
						checked={isButtonChecked(option.id)}
						md3Icon={option.md3Icon}
						showIcon={showIcon}
						handleClick={handleClick}
						// {...(option?.md3Icon && {md3Icon: option.md3Icon!})}
					/>
				))
			)}
		</StyledSegmentedButtons>
	);
};

SegmentedButtons.defaultProps = {
	buttonsType: "singleSelect",
	name: "Options",
	options: optionsStub,
	showIcon: false,
	density: 0,
};

export default SegmentedButtons;
