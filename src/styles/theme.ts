import { DefaultTheme } from "styled-components";
import { setAlphaOnHex } from "../utils/setAlphaOnHex";

import { tonalPalette } from "./tonalPalette";
import { typography } from "./typography";

declare module "styled-components" {
	export interface DefaultTheme {
		name: "light" | "dark";
		color: typeof color;
		fonts: {
			family: string;
		};
		boxShadow: typeof boxShadow;
		stateOpacity: typeof stateOpacity;
		surfaceToneOpacity: typeof surfaceToneOpacity;
		typography: typeof typography;
		// spacing: typeof spacing,
		// borderRadius: typeof borderRadius,
		// transitions: typeof transitions,
		// breakpoints: typeof breakpoints,
	}
}

const { primary, secondary, tertiary, error, neutral, neutralVariant } = tonalPalette;

// NOTE: why not create surfacetones directly and store a color value with opacity? Because you have to create 5 tones for 4 colors namely primary, secondary, tertiray and error. this could be computed instead.
const surfaceToneOpacity = {
	elevation1: 0.05,
	elevation2: 0.08,
	elevation3: 0.11,
	elevation4: 0.12,
	elevation5: 0.14,
};

// statelayer color depends on button/component content color
const stateOpacity = {
	stateLayer: {
		none: 0.0, // for enabled and disabled
		hover: 0.08,
		focus: 0.12,
		pressed: 0.12,
		dragged: 0.16,
	},
	container: {
		disabled: 0.12,
	},
	outline: {
		disabled: 0.12,
	},
	content: {
		disabled: 0.38,
	},
};

export const color = {
	primary: primary.primary40,
	primaryContainer: primary.primary90,
	secondary: secondary.secondary40,
	secondaryContainer: secondary.secondary90,
	tertiary: tertiary.tertiary40,
	tertiaryContainer: tertiary.tertiary90,
	error: error.error40,
	errorContainer: error.error90,
	background: neutral.neutral99,
	surface: neutral.neutral99,
	surfaceVariant: neutralVariant.neutralVariant90,
	onPrimary: primary.primary100,
	onPrimaryContainer: primary.primary10,
	onSecondary: secondary.secondary100,
	onSecondaryContainer: secondary.secondary10,
	onTertiary: tertiary.tertiary100,
	onTertiaryContainer: tertiary.tertiary10,
	onError: error.error100,
	onErrorContainer: error.error10,
	onBackground: neutral.neutral10,
	onSurface: neutral.neutral10,
	onSurfaceVariant: neutralVariant.neutralVariant30,
	outline: neutralVariant.neutralVariant50,
	outlineVariant: neutralVariant.neutralVariant80,
};

const boxShadow = {
	elevation1: `0px 1px 2px ${setAlphaOnHex(neutral.neutral0, 0.3)}, 0px 1px 3px 1px ${setAlphaOnHex(
		neutral.neutral0,
		0.15
	)}`,
	elevation2: `0px 1px 2px ${setAlphaOnHex(neutral.neutral0, 0.3)}, 0px 2px 6px 2px ${setAlphaOnHex(
		neutral.neutral0,
		0.15
	)}`,
	elevation3: `0px 4px 8px 3px ${setAlphaOnHex(neutral.neutral0, 0.15)}, 0px 1px 3px ${setAlphaOnHex(
		neutral.neutral0,
		0.3
	)}`,
	elevation4: `0px 6px 10px 4px ${setAlphaOnHex(neutral.neutral0, 0.15)}, 0px 2px 3px ${setAlphaOnHex(
		neutral.neutral0,
		0.3
	)}`,
	elevation5: `0px 8px 12px 6px ${setAlphaOnHex(neutral.neutral0, 0.15)}, 0px 4px 4px ${setAlphaOnHex(
		neutral.neutral0,
		0.3
	)}`,
};
// const boxShadow = {
// 	elevation1: `0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)`,
// 	elevation2: `0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)`,
// 	elevation3: `0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)`,
// 	elevation4: `0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)`,
// 	elevation5: `0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)`,
// };

export const lightTheme: DefaultTheme = {
	name: "light",
	color,
	fonts: {
		family: "Roboto, sans-serif",
	},
	typography,
	stateOpacity,
	surfaceToneOpacity,
	boxShadow,
};

export type ThemeType = typeof lightTheme;

export const darkTheme: DefaultTheme = {
	...lightTheme,
	name: "dark",
	color: {
		...color,
		primary: primary.primary80,
		primaryContainer: primary.primary30,
		secondary: secondary.secondary80,
		secondaryContainer: secondary.secondary30,
		tertiary: tertiary.tertiary80,
		tertiaryContainer: tertiary.tertiary30,
		error: error.error80,
		errorContainer: error.error30,
		background: neutral.neutral10,
		surface: neutral.neutral10,
		surfaceVariant: neutralVariant.neutralVariant30,
		onPrimary: primary.primary20,
		onPrimaryContainer: primary.primary90,
		onSecondary: secondary.secondary20,
		onSecondaryContainer: secondary.secondary90,
		onTertiary: tertiary.tertiary20,
		onTertiaryContainer: tertiary.tertiary90,
		onError: error.error20,
		onErrorContainer: error.error90,
		onBackground: neutral.neutral90,
		onSurface: neutral.neutral90,
		onSurfaceVariant: neutralVariant.neutralVariant80,
		outline: neutralVariant.neutralVariant60,
		outlineVariant: neutralVariant.neutralVariant30,
	},
	boxShadow: {
		elevation1: `0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)`,
		elevation2: `0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)`,
		elevation3: `0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)`,
		elevation4: `0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)`,
		elevation5: `0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)`,
	},
};

// Base Colors
export type AccentColorType = "primary" | "secondary" | "tertiary";
export type SemanticColorType = "error"; // could add other semantics like warning, success, etc
export type ColorType = AccentColorType | SemanticColorType;

// On Base Colors
export type OnAccentColorType = "onPrimary" | "onSecondary" | "onTertiary";
export type OnSemanticColorType = "onError";
export type OnColorType = OnAccentColorType | OnSemanticColorType;

// Base Container Colors
export type AccentContainerColorType = "primaryContainer" | "secondaryContainer" | "tertiaryContainer";
export type SemanticContainerColorType = "errorContainer";
export type ContainerColorType = AccentContainerColorType | SemanticContainerColorType;

// On Base Container Colors
export type OnAccentContainerColorType = "onPrimaryContainer" | "onSecondaryContainer" | "onTertiaryContainer";
export type OnSemanticContainerColorType = "onErrorContainer";
export type OnContainerColorType = OnAccentContainerColorType | OnSemanticContainerColorType;

// Neutral Colors
export type NeutralColorType = "background" | "surface" | "surfaceVariant" | "outline" | "outlineVariant";
export type OnNeutralColorType = "onBackground" | "onSurface" | "onSurfaceVariant";
