import React, { createContext } from "react";
import PropType from "prop-types";
import SegmentedButton, { SegmentedButtonProps } from "./SegmentedButton";
import styled, { css } from "styled-components";
import { useUniqueID } from "../../utils/useUniqueID";

export type OptionData = Omit<SegmentedButtonProps, "name" | "inputType">;

export const optionsStub: OptionData[] = [
	{
		// id: "option1",
		label: "Option 1",
		icon: "star_outline",
	},
	{ id: "option2", label: "Option 2", icon: "square", defaultChecked: true },
	{ id: "option3", label: "Option 3", icon: "circle", defaultChecked: true },
	{
		// id: "option4",
		label: "Option 4",
		icon: "change_history",
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
		// CONTEXT
		// Determine if input type is radio or checkbox
		const inputType = buttonsType === "singleSelect" ? "radio" : ("checkbox" as SegButtonsContextObj["inputType"]);
		// if user doesnt provide a group name, then generate one
		const generatedName = useUniqueID();
		const groupName = name || generatedName;
		const contextValue = {
			groupName,
			inputType,
		};

		return (
			<SegButtonsContext.Provider value={contextValue}>
				<StyledSegmentedButtons ref={ref} options={options} density={density} {...restProps}>
					{options.map((option, index) => {
						return <SegmentedButton key={index} {...option} />;
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
