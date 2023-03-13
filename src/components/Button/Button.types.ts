import { baseColorKeys, onBaseColorKeys, onContainerColorKeys, onNeutralColorKeys } from "../../styles/colors";

export const buttonColor = [...baseColorKeys] as const;
export type ButtonColor = typeof buttonColor[number];

export const buttonVariant = ["filled", "outlined", "text", "elevated", "tonal"] as const;
export type ButtonVariant = typeof buttonVariant[number];

export const buttonContentColor = [
	...baseColorKeys,
	...onBaseColorKeys,
	...onContainerColorKeys,
	...onNeutralColorKeys,
] as const;
export type ButtonContentColor = typeof buttonContentColor[number];

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	color?: ButtonColor;
	variant?: ButtonVariant;
	label?: string;
	md3icon?: string;
}
