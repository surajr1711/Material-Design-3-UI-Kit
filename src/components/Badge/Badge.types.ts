import React from "react";
import { ShapeScale } from "../../styles/shape";

export const badgeTypeKeys = ["small", "large", "largeMax"] as const;
export type BadgeType = typeof badgeTypeKeys[number];

export interface BadgeProps extends React.ComponentPropsWithRef<"div"> {
	count?: number;
	shapeScale?: ShapeScale;
}
