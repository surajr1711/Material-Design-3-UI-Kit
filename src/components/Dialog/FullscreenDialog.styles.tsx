import styled, { css } from "styled-components";
import { FullscreenDialogProps } from "./Dialog.types";
import { Color } from "../../styles/colors";
import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { Typescale } from "../../styles/typescale";

export type FullscreenDialoglayout = {
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	minWidth: 17.5; // rems, 280px
	maxWidth: 35; // rems, 560px
	height: 100; // percent
	dialogPaddingTop: 3.5; // 56px
	scrimOpacity: 0.5; // used in tablet/desktop mode
	headerPaddingLeft: 0.5; //16px left 24px right
	headerPaddingRight: 1.5; //16px left 24px right
	headerHeight: 3.5; // rems, 56px
	headlineTypescale: Typescale;
	closeIconAndHeadlineGap: 1; // 16px
	bodyPadding: 1.5; //rems, 24px
	actionsPadding: 1.5; //rems, 24px
	buttonsGap: 0.5;
};
export const fullscreenDialogLayout: FullscreenDialoglayout = {
	shapeFamily: "rounded",
	shapeScale: "extraLarge",
	minWidth: 17.5,
	maxWidth: 35,
	height: 100,
	dialogPaddingTop: 3.5,
	headerPaddingLeft: 0.5,
	headerPaddingRight: 1.5,
	headerHeight: 3.5,
	bodyPadding: 1.5,
	scrimOpacity: 0.5,
	headlineTypescale: "titleLarge",
	closeIconAndHeadlineGap: 1,
	actionsPadding: 1.5,
	buttonsGap: 0.5,
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
		width: 100%;
		min-width: ${fullscreenDialogLayout.minWidth}rem;
		max-width: ${fullscreenDialogLayout.maxWidth}rem;
		height: ${fullscreenDialogLayout.height}%;
		padding-top: ${fullscreenDialogLayout.dialogPaddingTop}rem;
		margin: auto;

		background-color: ${theme.color[fullscreenDialogColors.container]};

		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		@media (min-width: ${fullscreenDialogLayout.maxWidth}rem) {
			border-radius: ${theme.shape[fullscreenDialogLayout.shapeFamily][fullscreenDialogLayout.shapeScale]};
		}
	`;
});

export const StyledFSDialogBody = styled.div`
	padding: ${fullscreenDialogLayout.bodyPadding}rem;
`;

export const StyledFSDialogActions = styled.div`
	display: none;
	justify-content: right;
	gap: ${fullscreenDialogLayout.buttonsGap}rem;
	padding: ${fullscreenDialogLayout.actionsPadding}rem;

	@media (min-width: ${fullscreenDialogLayout.maxWidth}rem) {
		display: flex;
	}
`;
