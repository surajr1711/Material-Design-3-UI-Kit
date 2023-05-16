import React, { ChangeEventHandler, useState } from "react";
import SegmentedButton from "./SegmentedButton";
import { useUniqueID } from "../../utils/useUniqueID";
import { SegmentedButtonsProps } from "./SegmentedButtons.types";
import { defaultOptions } from "./segmentedButtons.stubs";
import { SegButtonsContext, SegButtonsContextObj } from "./useSegButtonsContext";
import { StyledSegmentedButtons } from "./SegmentedButtons.styles";

const SegmentedButtons = React.forwardRef<HTMLDivElement, SegmentedButtonsProps>(
	(
		{
			buttonsType = "singleSelect",
			name,
			options = defaultOptions,
			density = 0,
			showIconOrLabel = "bothIconAndLabel",
			...restProps
		},
		ref
	) => {
		// CONTEXT
		// InputType. Determine if input type is radio or checkbox
		const inputType =
			buttonsType === "singleSelect"
				? ("radio" as SegButtonsContextObj["inputType"])
				: ("checkbox" as SegButtonsContextObj["inputType"]);
		// GroupName. If user doesnt provide a group name, then generate one
		const generatedName = useUniqueID();
		const groupName = name || generatedName;
		const contextValue: SegButtonsContextObj = {
			groupName,
			inputType,
			showIconOrLabel,
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
