import { baseColorKeys, onBaseColorKeys, onContainerColorKeys, onNeutralColorKeys } from "../../styles/colors";
// import { IconProps } from "../Icon";
// import { TextProps } from "../Text";

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

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
	variant?: ButtonVariant;
	// icon?: React.ReactElement<IconProps>;
	// label?: React.ReactElement<TextProps>;
	label?: string;
	icon?: string;
}
