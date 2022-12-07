export const buttonColor = ["primary", "secondary", "tertiary", "error"] as const;
export type ButtonColor = typeof buttonColor[number];

export const buttonVariant = ["filled", "outlined", "text", "elevated", "tonal"] as const;
export type ButtonVariant = typeof buttonVariant[number];

export const buttonContentColor = [
	"primary",
	"secondary",
	"tertiary",
	"error",
	"onPrimary",
	"onSecondary",
	"onTertiary",
	"onError",
	"onPrimaryContainer",
	"onSecondaryContainer",
	"onTertiaryContainer",
	"onErrorContainer",
	"onSurface",
] as const;
export type ButtonContentColor = typeof buttonContentColor[number];
