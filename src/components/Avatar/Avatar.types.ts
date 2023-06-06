import React from "react";
import { ShapeScale } from "../../styles/shape";

export interface AvatarProps extends React.ComponentPropsWithRef<"img"> {
	sizeInRems?: number;
	shapeScale?: ShapeScale;
	disabled?: boolean; // turns image bnw
}
