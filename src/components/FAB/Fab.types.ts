import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { BaseColor, ContainerColor, NeutralColor, OnContainerColor } from "../../styles/colors";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import FabIcon from "./FabIcon";

// SHARED TYPES (FOR BOTH FAB AND EXTENDED-FAB)
export type FabColor = Exclude<BaseColor, "error"> | Extract<NeutralColor, "surface">;
export const fabColor: [
	Extract<FabColor, "primary">,
	Extract<FabColor, "secondary">,
	Extract<FabColor, "tertiary">,
	Extract<FabColor, "surface">
] = ["primary", "secondary", "tertiary", "surface"];

export type FabContentColor = Exclude<OnContainerColor, "onErrorContainer"> | Extract<BaseColor, "primary">;
export const fabContentColor: [
	Extract<FabContentColor, "onPrimaryContainer">,
	Extract<FabContentColor, "onSecondaryContainer">,
	Extract<FabContentColor, "onTertiaryContainer">,
	Extract<FabContentColor, "primary">
] = ["onPrimaryContainer", "onSecondaryContainer", "onTertiaryContainer", "primary"];

export type FabContainerColor = Exclude<ContainerColor, "errorContainer"> | Extract<NeutralColor, "surface">;
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

export type FabIconSizeInRems = 1.5 | 2.25;
export const fabIconSizeInRems: [Extract<FabIconSizeInRems, 1.5>, Extract<FabIconSizeInRems, 2.25>] = [1.5, 2.25];

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

// used for transfering fab content styles to child components automatically via fabcontext
export interface FabContextObj {
	color: FabContentColor;
	sizeInRems: FabIconSizeInRems;
}

// FAB TYPES (NON-EXTENDED)
export type FabLayout = {
	height: 3.5 | 2.5 | 6.5;
	width: 3.5 | 2.5 | 6.5;
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	iconSizeInRems: FabIconSizeInRems;
};

export interface FabProps extends React.ComponentPropsWithRef<"button"> {
	children?: JSX.Element;
	render?: boolean;
	color?: FabColor;
	size?: FabSize;
	tooltip?: string;
}

export interface FabComposition
	extends React.ForwardRefExoticComponent<FabProps & React.RefAttributes<HTMLButtonElement>> {
	Icon: typeof FabIcon;
}
