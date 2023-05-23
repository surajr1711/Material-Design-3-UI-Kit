import { Color, baseColorKeys, onBaseColorKeys, onContainerColorKeys, onNeutralColorKeys } from "../../styles/colors";

// export const iconColor = [
// 	...baseColorKeys,
// 	...onBaseColorKeys,
// 	...onContainerColorKeys,
// 	...onNeutralColorKeys,
// ] as const;
// export type IconColor = typeof iconColor[number];

export const iconVariant = ["filled", "outlined"] as const;
export type IconVariant = typeof iconVariant[number];

export interface IconProps extends React.ComponentPropsWithRef<"span"> {
	children?: string;
	// color?: IconColor;
	color?: Color;
	variant?: IconVariant;
	sizeInRems?: number;
	visibility?: boolean; // show or hidden. used to take up space even if icon is not visible. Ex: used in segmented buttons when check icon should take space but not be visible unless button is selected
}
