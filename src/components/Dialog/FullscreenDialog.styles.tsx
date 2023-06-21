import styled, { css } from "styled-components";
import { FullscreenDialogProps } from "./Dialog.types";
import { Color } from "../../styles/colors";
import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export type FullscreenDialoglayout = {
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	minWidth: 17.5; // rems, 280px
	maxWidth: 35; // rems, 560px
	height: 100; // percent
	headerHeight: 3.5; // rems, 56px
	padding: 1.75; //rems, 24px
	scrimOpacity: 0.5; // used in tablet/desktop mode
};
export const fullscreenDialogLayout: FullscreenDialoglayout = {
	shapeFamily: "rounded",
	shapeScale: "extraLarge",
	minWidth: 17.5,
	maxWidth: 35,
	height: 100,
	headerHeight: 3.5,
	padding: 1.75,
	scrimOpacity: 0.5,
};

type FullscreenDialogColors = {
	container: Color;
	icon: Color;
	headline: Color;
	scrim: Color;
};

export const fullscreenDialogColors: FullscreenDialogColors = {
	container: "surface",
	icon: "onSurface",
	headline: "onSurface",
	scrim: "scrim",
};

export const FullscreenDialogWrapper = styled.div(
	({ theme }) => css`
		position: absolute;
		inset: 0;
		z-index: 1;
		display: grid;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		@media (min-width: ${fullscreenDialogLayout.maxWidth}rem) {
			place-content: center;
		}
	`
);
// export interface StyledFullscreenDialogProps extends Omit<FullscreenDialogProps, "dialogIsOpen"> {}
export const StyledFullscreenDialog = styled.div(({ theme }) => {
	return css`
		min-width: ${fullscreenDialogLayout.minWidth}rem;
		max-width: ${fullscreenDialogLayout.maxWidth}rem;
		height: ${fullscreenDialogLayout.height}%;
		padding: ${fullscreenDialogLayout.padding}rem;
		margin: auto;

		background-color: ${theme.color[fullscreenDialogColors.container]};

		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		@media (min-width: ${fullscreenDialogLayout.maxWidth}rem) {
			border-radius: ${theme.shape[fullscreenDialogLayout.shapeFamily][fullscreenDialogLayout.shapeScale]};
		}
	`;
});
