import React from "react";
import { Elevation } from "../../styles/elevation";

export const chipVariant = ["assist", "filter", "input", "suggestion"] as const;
export type ChipVariant = typeof chipVariant[number];

export type ChipElevation = Extract<Elevation, "level0" | "level1">;
export const chipElevation: ChipElevation[] = ["level0", "level1"];

export const chipIconPosition = ["leading", "trailing"] as const;
export type ChipIconPosition = typeof chipIconPosition[number];

export const selectedKeys = ["selected", "unselected"] as const;
export type SelectedKeys = typeof selectedKeys[number];

// CHIP COMMON PROPS
export interface ChipProps extends React.ComponentPropsWithRef<"button"> {
	label?: string;
}

// ASSIST CHIP
export interface AssistChipProps extends ChipProps {
	elevation?: ChipElevation;
	iconName?: string;
	iconPosition?: ChipIconPosition;
	loading?: boolean;
}

// FILTER CHIP
export interface FilterChipProps extends ChipProps {
	elevation?: ChipElevation;
	iconName?: string;
	selected?: boolean;
	options?: string[]; // for menu
}

// INPUT CHIP
export interface InputChipProps extends ChipProps {
	iconName?: string;
	avatar?: string; // a link to image
	selected?: boolean; // Using the backspace key with the cursor before a chip selects the entire chip. The chip can then be deleted when the user taps the backspace key again.
	showDeleteIcon?: boolean;
	onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void; // provide a function to remove the chip from the UI when pressing backspace or clicking delete icon. typically a setState that manages the list of chips is passed
}

// SUGGESTION CHIP
export interface SuggestionChipProps extends ChipProps {
	elevation?: ChipElevation;
	selected?: boolean;
}

// TYPE/PROPS OVERLOAD
export interface ChipOverload {
	(type: "assist"): React.ForwardRefExoticComponent<AssistChipProps & React.RefAttributes<HTMLButtonElement>>;
	(type: "filter"): React.ForwardRefExoticComponent<FilterChipProps & React.RefAttributes<HTMLButtonElement>>;
	(type: "input"): React.ForwardRefExoticComponent<InputChipProps & React.RefAttributes<HTMLButtonElement>>;
	(type: "suggestion"): React.ForwardRefExoticComponent<SuggestionChipProps & React.RefAttributes<HTMLButtonElement>>;
}
