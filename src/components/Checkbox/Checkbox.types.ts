// CHECKBOX main wrapper component
export interface CheckboxProps extends CheckboxInputProps, LabelProps {}

// CHECKBOX INPUT
export const checkboxState = ["selected", "unselected", "indeterminate"] as const;
export type CheckboxState = typeof checkboxState[number];

export const checkboxStateIcons: { [T in CheckboxState]: string } = {
	selected: "check_box",
	unselected: "check_box_outline_blank",
	indeterminate: "indeterminate_check_box",
} as const;

export interface CheckboxInputProps extends Omit<React.ComponentPropsWithRef<"input">, "checked" | "type"> {
	checkboxState?: CheckboxState;
	error?: boolean; // set if checkbox error state
}

// CHECKBOX LABEL
export interface LabelProps {
	label?: string;
}
export interface CheckboxLabelProps extends LabelProps, React.ComponentPropsWithRef<"label"> {}
