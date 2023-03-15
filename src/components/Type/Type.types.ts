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
import { Typescale } from "../../styles/typescale";

export const typeTag = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "label"] as const;
export type TypeTag = typeof typeTag[number];

export const typeContentColorKeys = [
	...baseColorKeys,
	...onBaseColorKeys,
	...onContainerColorKeys,
	...onNeutralColorKeys,
];
export type TypeContentColor = BaseColor | OnBaseColor | OnContainerColor | OnNeutralColor;

export interface TypeProps {
	children?: string | number;
	render?: boolean;
	typescale?: Typescale;
	color?: TypeContentColor;
	tag?: TypeTag;
}
