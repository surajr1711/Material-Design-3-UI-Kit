import styled, { css } from "styled-components";
import { SegmentedButtonsGroupProps } from "./SegmentedButtons.types";

// export const segButtonLayout = {
// 	minWidth: 3, // rems
// 	height: 2.5, // rems
// 	paddingInline: 0.75, //rems
// 	iconLabelGap: 0.5, //rems
// };
export const densityHeightMap = {
	"0": 2.5, // rems
	"-1": 2.25, // rems
	"-2": 2, // rems
	"-3": 1.75, // rems
} as const;

export const StyledSegmentedButtons = styled.div<Omit<SegmentedButtonsGroupProps, "name">>(({ options, density }) => {
	const optionsNum = options!.length;
	const key = density!.toString() as keyof typeof densityHeightMap;
	return css`
		height: ${densityHeightMap[key]}rem;
		display: inline-grid;
		grid-template-columns: repeat(${optionsNum}, minmax(3rem, 1fr));
		align-items: center;
		border: none;
		padding: 0;
		overflow: hidden;
	`;
});
