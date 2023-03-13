import Input from "./Input";
import Label from "./Label";

/* TYPES */
export type DensityType = 0 | -1 | -2 | -3;
export const densityType: DensityType[] = [0, -1, -2, -3];

export type DensityInRemsType = 0 | 0.25 | 0.5 | 0.75;
export const densityInRemsType: DensityInRemsType[] = [0, 0.25, 0.5, 0.75];

/* SEGBUTTON */
export interface SegButtonProps {
	children: React.ReactNode;
	density?: DensityType; // height of buttons
}
export interface SegButtonComposition {
	Input: typeof Input;
	Label: typeof Label;
}

export interface StyledSegButtonProps {
	densityInRems: DensityInRemsType;
}

/* CHILD COMPONENTS */
export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

export interface LabelProps extends React.ComponentPropsWithRef<"label"> {
	children: JSX.Element | JSX.Element[];
}
