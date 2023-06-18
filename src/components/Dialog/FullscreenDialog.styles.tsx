import styled, { css } from "styled-components";
import { FullscreenDialogProps } from "./Dialog.types";
import { Color } from "../../styles/colors";
import { ShapeFamily, ShapeScale } from "../../styles/shape";

export type FullscreenDialoglayout = {
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	// width: 100; // percent
	minWidth: 17.5; // rems, 280px
	maxWidth: 35; // rems, 560px
	height: 100; // percent
	headerHeight: 3.5; // rems, 56px
	padding: 1.75; //rems, 24px
};
export const fullscreenDialogLayout: FullscreenDialoglayout = {
	shapeFamily: "rounded",
	shapeScale: "none",
	// width: 100,
	minWidth: 17.5,
	maxWidth: 35,
	height: 100,
	headerHeight: 3.5,
	padding: 1.75,
};

type FullscreenDialogColors = {
	container: Color;
	icon: Color;
	headline: Color;
};

export const fullscreenDialogColors: FullscreenDialogColors = {
	container: "surface",
	icon: "onSurface",
	headline: "onSurface",
};

export const StyledFullscreenDialog = styled.div<FullscreenDialogProps>(({ theme }) => {
	return css`
		min-width: ${fullscreenDialogLayout.minWidth}rem;
		max-width: ${fullscreenDialogLayout.maxWidth}rem;
		height: ${fullscreenDialogLayout.height}%;
		padding: ${fullscreenDialogLayout.padding}rem;

		background-color: ${theme.color[fullscreenDialogColors.container]};

		border: 1px solid black;
	`;
});
