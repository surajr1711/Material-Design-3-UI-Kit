import styled, { css } from "styled-components";
import { DialogProps } from "./Dialog.types";
import { ShapeFamily } from "../../styles/shape";
import { ShapeScale } from "../../styles/shape";
import { Color } from "../../styles/colors";
import { Typescale } from "../../styles/typescale";

type DialogLayout = {
	shapeFamily: ShapeFamily;
	shapeScale: ShapeScale;
	minWidth: 17.5; // rems, 280px
	maxWidth: 35; // rems, 560px
	padding: 1.75; // rems, 24px
	iconSize: 1.75; //rems, 24px
	headline: Typescale;
	iconTitleGap: 1; // rems, 16px
	supportingText: Typescale;
};

export const dialogLayout: DialogLayout = {
	shapeFamily: "rounded",
	shapeScale: "extraLarge",
	minWidth: 17.5,
	maxWidth: 35,
	padding: 1.75,
	iconSize: 1.75,
	headline: "headlineSmall",
	iconTitleGap: 1,
	supportingText: "bodyMedium",
};

type DialogColors = {
	container: Color;
	icon: Color;
	headline: Color;
	supportingText: Color;
};
export const dialogColors: DialogColors = {
	container: "surface",
	icon: "secondary",
	headline: "onSurface",
	supportingText: "onSurfaceVariant",
};

export const StyledDialog = styled.dialog<DialogProps>(
	({ theme }) => css`
		min-width: ${dialogLayout.minWidth}rem;
		max-width: ${dialogLayout.maxWidth}rem;
		padding: ${dialogLayout.padding}rem;
		margin: auto;

		background-color: ${theme.color[dialogColors.container]};

		border-radius: ${theme.shape[dialogLayout.shapeFamily][dialogLayout.shapeScale]};
	`
);
