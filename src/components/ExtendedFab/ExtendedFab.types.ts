import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { FabLayout, FabProps } from "../Fab/Fab.types";

export type ExtFabLayout = {
	height: Extract<FabLayout["height"], 3.5>;
	width: "auto";
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	iconSizeInRems: Extract<FabLayout["iconSizeInRems"], 1.5>;
};

export type ExtFabWidth = "fixed" | "fluid";
export const extFabWidthKeys: [Extract<ExtFabWidth, "fixed">, Extract<ExtFabWidth, "fluid">] = ["fixed", "fluid"];

export interface ExtendedFabProps extends Omit<FabProps, "size"> {
	width?: "fixed" | "fluid";
	label?: string;
	withIcon?: boolean;
	// label: React.ReactElement; // typeof Typography component
}
