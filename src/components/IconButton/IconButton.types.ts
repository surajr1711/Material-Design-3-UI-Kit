import React from "react";

export const iconButtonVariant = ["filled", "tonal", "outlined", "standard"] as const;
export type IconButtonVariant = typeof iconButtonVariant[number];

export const iconButtonContainerColor = [
	"primary",
	"surfaceVariant",
	"onSurface",
	"secondaryContainer",
	"inverseSurface",
	"none",
] as const;
export type IconButtonContainerColor = typeof iconButtonContainerColor[number];

export const iconButtonContentColor = [
	"primary",
	"onPrimary",
	"onSurface",
	"onSecondaryContainer",
	"onSurfaceVariant",
	"onInverseSurface",
] as const;
export type IconButtonContentColor = typeof iconButtonContentColor[number];

export interface IconButtonProps extends React.ComponentPropsWithRef<"button"> {
	icon: React.ReactElement;
	render?: boolean;
	variant?: IconButtonVariant;
	toggle?: boolean; // is the button a toggle type
	selected?: boolean; // if toggleable, is button selected or unselected
}
