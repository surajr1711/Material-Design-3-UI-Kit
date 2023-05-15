import { densityHeightMap } from "./SegmentedButtons.styles";

export type ShowIconOrLabel = "onlyIcon" | "onlyLabel" | "bothIconAndLabel";

export interface SegmentedButtonsProps extends React.ComponentPropsWithRef<"div"> {
	buttonsType?: "singleSelect" | "multiSelect";
	name: string; // name of the common button group
	options?: OptionData[]; // array of min2 max5
	density?: Density; // thickness of button
	showIconOrLabel?: ShowIconOrLabel; // displays icon or label or both
}

export interface SegmentedButtonProps {
	id: string; // custom ID of input to access its value
	label?: string; // the text that will be displayed
	icon?: string; // name of the material design 3 icon
	checked?: boolean; // hold checked state value
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type OptionData = Omit<SegmentedButtonProps, "handleChange">;

export const densityKeys = Object.keys(densityHeightMap).map((key) => parseInt(key));
export type Density = typeof densityKeys[number];
