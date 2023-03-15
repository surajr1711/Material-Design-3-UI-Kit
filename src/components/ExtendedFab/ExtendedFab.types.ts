import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { FabLayout, FabProps } from "../FAB/Fab.types";
import FabIcon from "../FAB/FabIcon";
import FabLabel from "../FAB/FabLabel";
import { FlexBox } from "../spacing/FlexBox";

export type ExtFabLayout = {
	height: Extract<FabLayout["height"], 3.5>;
	width: "auto";
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	iconSizeInRems: Extract<FabLayout["iconSizeInRems"], 1.5>;
};

export type ExtFabWidth = "fixed" | "fluid";
export const extFabWidthKeys: [Extract<ExtFabWidth, "fixed">, Extract<ExtFabWidth, "fluid">] = ["fixed", "fluid"];

// export type ExtendedFabProps = Omit<FabProps, "size">;
export interface ExtendedFabProps extends Omit<FabProps, "size"> {
	width?: "fixed" | "fluid";
}

export interface ExtendedFabComposition
	extends React.ForwardRefExoticComponent<ExtendedFabProps & React.RefAttributes<HTMLButtonElement>> {
	Wrapper: typeof FlexBox;
	Icon: typeof FabIcon;
	Label: typeof FabLabel;
}
