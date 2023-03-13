import {
	BaseColor,
	baseColorKeys,
	OnBaseColor,
	onBaseColorKeys,
	OnContainerColor,
	onContainerColorKeys,
	OnNeutralColor,
	onNeutralColorKeys,
} from "../../styles/colors";

export type IconContentColor = BaseColor | OnBaseColor | OnContainerColor | OnNeutralColor;
export const iconContentColor: IconContentColor[] = [
	...baseColorKeys,
	...onBaseColorKeys,
	...onContainerColorKeys,
	...onNeutralColorKeys,
];
// export type IconContentColor = typeof iconContentColor[number];

export const iconVariant = ["filled", "outlined"] as const;
export type IconVariant = typeof iconVariant[number];

export interface IconProps extends React.ComponentPropsWithRef<"span"> {
	children?: string;
	color?: IconContentColor;
	variant?: IconVariant;
	sizeInRems?: number;
}
