import { BgColorType, ColorType, ContentColorType } from "./FAB";

export type UseFABColors = (color: ColorType) => {
	bgColor: BgColorType;
	contentColor: ContentColorType;
};
export const useFABColors: UseFABColors = (color) => {
	switch (color) {
		case "secondary":
			return {
				bgColor: "secondaryContainer",
				contentColor: "onSecondaryContainer",
			};
		case "surface":
			return {
				bgColor: "surface",
				contentColor: "primary",
			};
		case "tertiary":
			return {
				bgColor: "tertiaryContainer",
				contentColor: "onTertiaryContainer",
			};
		// primary and undefined
		default:
			return {
				bgColor: "primaryContainer",
				contentColor: "onPrimaryContainer",
			};
	}
};
