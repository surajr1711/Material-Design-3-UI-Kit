import { tonalPalette } from "./tonalPalette";

const { primary, secondary, tertiary, error, neutral, neutralVariant } = tonalPalette;

// Light Theme
const baseColor = {
	primary: primary.primary40,
	secondary: secondary.secondary40,
	tertiary: tertiary.tertiary40,
	error: error.error40,
};
const containerColor = {
	primaryContainer: primary.primary90,
	secondaryContainer: secondary.secondary90,
	tertiaryContainer: tertiary.tertiary90,
	errorContainer: error.error90,
};
const onBaseColor = {
	onPrimary: primary.primary100,
	onSecondary: secondary.secondary100,
	onTertiary: tertiary.tertiary100,
	onError: error.error100,
};
const onContainerColor = {
	onPrimaryContainer: primary.primary10,
	onSecondaryContainer: secondary.secondary10,
	onTertiaryContainer: tertiary.tertiary10,
	onErrorContainer: error.error10,
};
const neutralColor = {
	background: neutral.neutral99,
	surface: neutral.neutral99,
	surfaceVariant: neutralVariant.neutralVariant90,
	outline: neutralVariant.neutralVariant50,
	outlineVariant: neutralVariant.neutralVariant80,
	surfaceTint: primary.primary40,
	inverseSurface: neutral.neutral20,
	inversePrimary: primary.primary80,
	shadow: neutral.neutral0,
	scrim: neutral.neutral0,
};
const onNeutralColor = {
	onBackground: neutral.neutral10,
	onSurface: neutral.neutral10,
	onSurfaceVariant: neutralVariant.neutralVariant30,
	onInverseSurface: neutral.neutral95,
};
export const color = {
	...baseColor,
	...onBaseColor,
	...containerColor,
	...onContainerColor,
	...neutralColor,
	...onNeutralColor,
};

// Dark Theme
const baseColorDark: typeof baseColor = {
	primary: primary.primary80,
	secondary: secondary.secondary80,
	tertiary: tertiary.tertiary80,
	error: error.error80,
};
const containerColorDark: typeof containerColor = {
	primaryContainer: primary.primary30,
	secondaryContainer: secondary.secondary30,
	tertiaryContainer: tertiary.tertiary30,
	errorContainer: error.error30,
};
const onBaseColorDark: typeof onBaseColor = {
	onPrimary: primary.primary20,
	onSecondary: secondary.secondary20,
	onTertiary: tertiary.tertiary20,
	onError: error.error20,
};
const onContainerColorDark: typeof onContainerColor = {
	onPrimaryContainer: primary.primary90,
	onSecondaryContainer: secondary.secondary90,
	onTertiaryContainer: tertiary.tertiary90,
	onErrorContainer: error.error90,
};
const neutralColorDark: typeof neutralColor = {
	background: neutral.neutral10,
	surface: neutral.neutral10,
	surfaceVariant: neutralVariant.neutralVariant30,
	outline: neutralVariant.neutralVariant60,
	outlineVariant: neutralVariant.neutralVariant30,
	surfaceTint: primary.primary80,
	inverseSurface: neutral.neutral90,
	inversePrimary: primary.primary40,
	shadow: neutral.neutral0,
	scrim: neutral.neutral0,
};
const onNeutralColorDark: typeof onNeutralColor = {
	onBackground: neutral.neutral90,
	onSurface: neutral.neutral90,
	onSurfaceVariant: neutralVariant.neutralVariant80,
	onInverseSurface: neutral.neutral20,
};
export const colorDark: typeof color = {
	...baseColorDark,
	...onBaseColorDark,
	...containerColorDark,
	...onContainerColorDark,
	...neutralColorDark,
	...onNeutralColorDark,
};

// Color keys for TS
export type BaseColor = keyof typeof baseColor;
export type OnBaseColor = keyof typeof onBaseColor;
export type ContainerColor = keyof typeof containerColor;
export type OnContainerColor = keyof typeof onContainerColor;
export type NeutralColor = keyof typeof neutralColor;
export type OnNeutralColor = keyof typeof onNeutralColor;
export type Color = keyof typeof color;

export type ComponentColor = BaseColor | ContainerColor | NeutralColor;
export type OnColor = OnBaseColor | OnContainerColor | OnNeutralColor;

// Color keys for proptypes
export const baseColorKeys = Object.keys(baseColor) as BaseColor[];
export const onBaseColorKeys = Object.keys(onBaseColor) as OnBaseColor[];
export const containerColorKeys = Object.keys(containerColor) as ContainerColor[];
export const onContainerColorKeys = Object.keys(onContainerColor) as OnContainerColor[];
export const neutralColorKeys = Object.keys(neutralColor) as NeutralColor[];
export const onNeutralColorKeys = Object.keys(onNeutralColor) as OnNeutralColor[];
export const colorKeys = Object.keys(color) as Color[];

export const componentColorKeys = [...baseColorKeys, ...containerColorKeys, ...neutralColorKeys] as const;
export const onColorKeys = [...onBaseColorKeys, ...onContainerColorKeys, ...onNeutralColorKeys] as const;
