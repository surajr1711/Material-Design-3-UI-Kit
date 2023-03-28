import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { IconProps } from "../Icon";

// SHARED TYPES (FOR BOTH FAB AND EXTENDED-FAB)
export const fabColor = ["primary", "secondary", "tertiary", "surface"] as const;
export type FabColor = typeof fabColor[number];

export const fabContentColor = [
	"onPrimaryContainer",
	"onSecondaryContainer",
	"onTertiaryContainer",
	"primary",
] as const;
export type FabContentColor = typeof fabContentColor[number];

export const fabContainerColor = ["primaryContainer", "secondaryContainer", "tertiaryContainer", "surface"] as const;
export type FabContainerColor = typeof fabContainerColor[number];

export const fabSize = ["fab", "smallFab", "largeFab"] as const;
export type FabSize = typeof fabSize[number];

export const fabIconSizeInRems = [1.5, 2.25] as const;
export type FabIconSizeInRems = typeof fabIconSizeInRems[number];

// FAB TYPES (NON-EXTENDED)
export type FabLayout = {
	height: 3.5 | 2.5 | 6.5;
	width: 3.5 | 2.5 | 6.5;
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	iconSizeInRems: FabIconSizeInRems;
};

export interface FabProps extends React.ComponentPropsWithRef<"button"> {
	render?: boolean;
	color?: FabColor;
	size?: FabSize;
	tooltip?: string;
	icon: React.ReactElement<IconProps>;
	// icon: React.ReactElement;
}
