import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { BaseColor, ContainerColor, NeutralColor, OnContainerColor } from "../../styles/colors";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import Icon from "../Icon";
import Type from "../Type";
import { FlexBox } from "../spacing/FlexBox";
import FabLabel from "./FabLabel";
import FabIcon from "./FabIcon";

// SHARED TYPES (FOR BOTH FAB AND EXTENDED-FAB)
export type FabColor = Exclude<BaseColor, "error"> | Extract<NeutralColor, "surface">;
export const fabColor: [
	Extract<FabColor, "primary">,
	Extract<FabColor, "secondary">,
	Extract<FabColor, "tertiary">,
	Extract<FabColor, "surface">
] = ["primary", "secondary", "tertiary", "surface"];
// export type FabColor = Extract<BaseColor, 'primary'| 'secondary'| 'tertiary'> | Extract<NeutralColor, 'surface'>
// // Using Exclude utility will include new values that are added to the original type. Extract may be more type safe since you're selecting specific values. It won't mutate if the original type is expanded.

/* // Old type declaration method
// not type safe enough. it allows for empty array and repetitive values.
export const newFabColor: NewFABColor[] = []

// this method has no type safety while declaring the array values.
export const fabColor = ["primary", "surface", "secondary", "tertiary"] as const;
export type FABColor = typeof fabColor[number]; */

export type FabContentColor = Exclude<OnContainerColor, "onErrorContainer"> | Extract<BaseColor, "primary">;
export const fabContentColor: [
	Extract<FabContentColor, "onPrimaryContainer">,
	Extract<FabContentColor, "onSecondaryContainer">,
	Extract<FabContentColor, "onTertiaryContainer">,
	Extract<FabContentColor, "primary">
] = ["onPrimaryContainer", "onSecondaryContainer", "onTertiaryContainer", "primary"];
// export type FabContentColor = typeof fabContentColor[number];

export type FabContainerColor = Exclude<ContainerColor, "errorContainer"> | Extract<NeutralColor, "surface">;
// export type FabContainerColor = typeof fabContainerColor[number];
export const fabContainerColor: [
	Extract<FabContainerColor, "primaryContainer">,
	Extract<FabContainerColor, "secondaryContainer">,
	Extract<FabContainerColor, "tertiaryContainer">,
	Extract<FabContainerColor, "surface">
] = ["primaryContainer", "secondaryContainer", "tertiaryContainer", "surface"];

export type FabSize = "fab" | "smallFab" | "largeFab";
export const fabSize: [Extract<FabSize, "fab">, Extract<FabSize, "smallFab">, Extract<FabSize, "largeFab">] = [
	"fab",
	"smallFab",
	"largeFab",
];
// export const fabSize = ["fab", "smallFab", "largeFab", "extendedFab"] as const;
// export type FabSize = typeof fabSize[number];

export type FabState = Exclude<State, "disabled" | "dragged">;
export const fabState: [
	Extract<FabState, "enabled">,
	Extract<FabState, "hover">,
	Extract<FabState, "focus">,
	Extract<FabState, "pressed">
] = ["enabled", "hover", "focus", "pressed"];

export type FabElevation = Exclude<Elevation, "level0" | "level5">;
export const fabElevation: [
	Extract<FabElevation, "level1">,
	Extract<FabElevation, "level2">,
	Extract<FabElevation, "level3">,
	Extract<FabElevation, "level4">
] = ["level1", "level2", "level3", "level4"];

// FAB TYPES (NON-EXTENDED)
export type FabLayout = {
	height: 3.5 | 2.5 | 6.5;
	width: 3.5 | 2.5 | 6.5;
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	iconSizeInRems: 1.5 | 2.25;
};
export type FabStyles = {
	containerColor: FabContainerColor;
	contentAndStateLayerColor: FabContentColor;
};

export interface FabProps extends React.ComponentPropsWithRef<"button"> {
	children?: JSX.Element | JSX.Element[];
	color?: FabColor;
	size?: FabSize;
	tooltip?: string;
}

export interface FabComposition
	extends React.ForwardRefExoticComponent<FabProps & React.RefAttributes<HTMLButtonElement>> {
	Icon: typeof FabIcon;
	// Label: typeof Type;
	// Wrapper: typeof FlexBox;
}

// EXTENDED FAB TYPES
export type ExtFabLayout = {
	height: 3.5;
	width: "auto";
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	iconSizeInRems: 1.5;
};

export type ExtendedFabProps = Omit<FabProps, "size">;

export interface ExtendedFabComposition
	extends React.ForwardRefExoticComponent<ExtendedFabProps & React.RefAttributes<HTMLButtonElement>> {
	Icon: typeof FabIcon;
	Label: typeof FabLabel;
	Wrapper: typeof FlexBox;
}
