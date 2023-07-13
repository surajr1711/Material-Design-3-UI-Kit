import { baseColorKeys, onBaseColorKeys, onContainerColorKeys, onNeutralColorKeys } from "../../styles/colors";

export const buttonColor = [...baseColorKeys] as const;
export type ButtonColor = (typeof buttonColor)[number];

export const buttonVariant = ["filled", "outlined", "text", "elevated", "tonal"] as const;
export type ButtonVariant = (typeof buttonVariant)[number];

export const buttonContentColor = [
	...baseColorKeys,
	...onBaseColorKeys,
	...onContainerColorKeys,
	...onNeutralColorKeys,
] as const;
export type ButtonContentColor = (typeof buttonContentColor)[number];

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
	/** There are five types of common buttons: */
	variant?: ButtonVariant;
	/** Label text is the most important element of a button. It describes the action that will occur if a user taps a button. */
	label?: string;
	icon?: string;
}
