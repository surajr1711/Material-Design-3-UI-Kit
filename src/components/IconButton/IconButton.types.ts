export const iconButtonVariant = ["filled", "tonal", "outlined", "standard"] as const;
export type IconButtonVariant = typeof iconButtonVariant[number];

export const iconButtonContentColor = [
	"primary",
	"onPrimary",
	"onSurface",
	"onSecondaryContainer",
	"onSurfaceVariant",
	"onInverseSurface",
] as const;
export type IconButtonContentColor = typeof iconButtonContentColor[number];
