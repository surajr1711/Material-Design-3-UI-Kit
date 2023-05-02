import React, { ChangeEventHandler, createContext, useState } from "react";
import PropType from "prop-types";
import SegmentedButton, { SegmentedButtonProps } from "./SegmentedButton";
import styled, { css } from "styled-components";
import { useUniqueID } from "../../utils/useUniqueID";

export type OptionData = Omit<SegmentedButtonProps, "handleChange">;
// export interface OptionData extends Pick<SegmentedButtonProps, "id" | "label" | "icon" | 'checked'> {
// defaultChecked?: boolean; // if user wants to set initial value of label as checked
// }

export const optionsStub: OptionData[] = [
	{
		id: "option1",
		label: "Some long name options",
		icon: "star_outline",
	},
	{
		id: "option2",
		label: "Option 2",
		icon: "square",
		// defaultChecked: true,
		checked: true,
	},
	{
		id: "option3",
		// label: "Option 3",
		icon: "circle",
		//  defaultChecked: true,
		checked: true,
	},
	{
		id: "option4",
		label: "Option 4",
		icon: "change_history",
		// handleChange: () => console.log("Hello! from user-provided 'handlechange()' for item-id 'option4' of 'options' array.")
	},
];

export const densityHeightMap = {
	"0": 2.5, // rems
	"-1": 2.25, // rems
	"-2": 2, // rems
	"-3": 1.75, // rems
} as const;
export const densityKeys = Object.keys(densityHeightMap).map((key) => parseInt(key));
export type Density = typeof densityKeys[number];

export interface SegmentedButtonsProps extends React.ComponentPropsWithRef<"div"> {
	buttonsType?: "singleSelect" | "multiSelect";
	name: string; // name of the common button group
	options?: OptionData[]; // array of min2 max5
	density?: Density;
}

// export const segButtonLayout = {
// 	minWidth: 3, // rems
// 	height: 2.5, // rems
// 	paddingInline: 0.75, //rems
// 	iconLabelGap: 0.5, //rems
// };

export const StyledSegmentedButtons = styled.div<Omit<SegmentedButtonsProps, "name">>(({ options, density }) => {
	const optionsNum = options!.length;
	const key = density!.toString() as keyof typeof densityHeightMap;

	return css`
		height: ${densityHeightMap[key]}rem;
		display: inline-grid;
		grid-template-columns: repeat(${optionsNum}, minmax(3rem, 1fr));
		align-items: center;
		border: none;
		padding: 0;
		overflow: hidden;
		// outline: 1px solid red;
	`;
});

// create group name context
export interface SegButtonsContextObj {
	groupName: string;
	inputType: "radio" | "checkbox";
}
export const SegButtonsContext = createContext<SegButtonsContextObj | undefined>(undefined);

const SegmentedButtons = React.forwardRef<HTMLDivElement, SegmentedButtonsProps>(
	({ buttonsType = "singleSelect", name, options = optionsStub, density = 0, ...restProps }, ref) => {
		// CONTEXT for groupName and inputType
		// Determine if input type is radio or checkbox
		const inputType = buttonsType === "singleSelect" ? "radio" : ("checkbox" as SegButtonsContextObj["inputType"]);
		// if user doesnt provide a group name, then generate one
		const generatedName = useUniqueID();
		const groupName = name || generatedName;
		const contextValue = {
			groupName,
			inputType,
		};

		// INITIAL checked buttons state
		// make an array of checked button ids. both the id and defaultchecked must be provided by user. set those ids as initial state.
		let initialState: string[] = options
			.map((option) => option.checked && option.id)
			.filter((id) => id !== undefined && id !== false) as string[];
		// if no default checked was provided, ie if initial state array is empty then set the first option id as checked.
		if (initialState.length === 0) initialState = [options[0].id];
		// if button type is radio, then initial state is only first value of array
		if (buttonsType === "singleSelect") initialState = [initialState[0]];

		// CREATE STATE
		const [checkedButtons, setCheckedButtons] = useState<string[]>(initialState);
		// function to set button as checked if its id is present in the checkedbuttons state array
		const isButtonChecked = (id: string): boolean => checkedButtons.includes(id);

		// EVENT HANDLERS
		// when a button is clicked  update the state
		const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
			// console.dir(e.currentTarget);
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
			<SegButtonsContext.Provider value={contextValue}>
				<StyledSegmentedButtons ref={ref} options={options} density={density} {...restProps}>
					{options.map((option, index) => {
						return (
							<SegmentedButton
								key={index}
								handleChange={handleChange}
								{...option}
								checked={isButtonChecked(option.id)}
							/>
						);
					})}
				</StyledSegmentedButtons>
			</SegButtonsContext.Provider>
		);
	}
);

// SegmentedButtons.propTypes = {
// 	options: PropType.arrayOf(PropType.shape({
// 			id: PropType.string,
// 			label: PropType.string,
// 			icon: PropType.string,
// 			defaultChecked: PropType.bool,
// 		})
// 	),
// };

export default SegmentedButtons;
