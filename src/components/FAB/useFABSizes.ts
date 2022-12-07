import { SizeType } from "./FAB";
import { StyledExtendedFAB, StyledFAB, StyledLargeFAB, StyledSmallFAB } from "./FAB.styles";

export type UseFABSizes = (size: SizeType) => {
	Component: typeof StyledFAB;
	iconSize: 1.5 | 2.25;
};

export const useFABSizes: UseFABSizes = (size) => {
	switch (size) {
		case "smallFAB":
			return {
				Component: StyledSmallFAB,
				iconSize: 1.5,
			};
		case "largeFAB":
			return {
				Component: StyledLargeFAB,
				iconSize: 2.25,
			};
		case "extendedFAB":
			return {
				Component: StyledExtendedFAB,
				iconSize: 1.5,
			};
		// FAB and undefined
		default:
			return {
				Component: StyledFAB,
				iconSize: 1.5,
			};
	}
};
