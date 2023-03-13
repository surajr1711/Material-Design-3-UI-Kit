import { DefaultTheme } from "styled-components";
import { color, colorDark } from "./colors";
import { boxShadowDarkTheme, elevation } from "./elevation";
import { stateOpacity } from "./interactionStates";
import { motion } from "./motion";
import { shape } from "./shape";
import { typescale } from "./typescale";

declare module "styled-components" {
	export interface DefaultTheme {
		name: "light" | "dark";
		color: typeof color;
		stateOpacity: typeof stateOpacity;
		typescale: typeof typescale;
		elevation: typeof elevation;
		motion: typeof motion;
		shape: typeof shape;
		// spacing: typeof spacing,
		// breakpoints: typeof breakpoints,
	}
}

export const lightTheme: DefaultTheme = {
	name: "light",
	color,
	typescale,
	stateOpacity,
	elevation,
	motion,
	shape,
};

export type ThemeType = typeof lightTheme;

export const darkTheme: DefaultTheme = {
	...lightTheme,
	name: "dark",
	color: colorDark,
	elevation: {
		...elevation,
		boxShadow: {
			...boxShadowDarkTheme,
		},
	},
};
