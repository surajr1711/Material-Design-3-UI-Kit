import { baseColorKeys, onBaseColorKeys, onContainerColorKeys, onNeutralColorKeys } from "../../styles/colors";

export const iconContentColor = [
	...baseColorKeys,
	...onBaseColorKeys,
	...onContainerColorKeys,
	...onNeutralColorKeys,
] as const;
export type IconContentColor = typeof iconContentColor[number];

export const iconVariant = ["filled", "outlined"] as const;
export type IconVariant = typeof iconVariant[number];

export interface IconProps extends React.ComponentPropsWithRef<"span"> {
	children?: string;
	color?: IconContentColor;
	variant?: IconVariant;
	sizeInRems?: number;
}
