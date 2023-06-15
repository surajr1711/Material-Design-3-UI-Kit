import styled, { css } from "styled-components";
import { DialogActionsProps, DialogBodyProps, DialogHeaderProps, DialogProps } from "./Dialog.types";
import { ShapeFamily } from "../../styles/shape";
import { ShapeScale } from "../../styles/shape";
import { Color } from "../../styles/colors";
import { Typescale } from "../../styles/typescale";
import { ButtonVariant } from "../Button/Button.types";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

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
	titleBodyGap: 1; // rems, 16px
	bodyActionsGap: 1.75; // rems, 24px
	buttonsGap: 0.5; // rems, 8px
	buttonVariant: ButtonVariant;
	scrimOpacity: 0.5;
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
	titleBodyGap: 1,
	bodyActionsGap: 1.75,
	buttonsGap: 0.5,
	buttonVariant: "text",
	scrimOpacity: 0.5,
};

type DialogColors = {
	container: Color;
	icon: Color;
	headline: Color;
	supportingText: Color;
	scrim: Color;
};
export const dialogColors: DialogColors = {
	container: "surface",
	icon: "secondary",
	headline: "onSurface",
	supportingText: "onSurfaceVariant",
	scrim: "scrim",
};

export interface StyledDialogProps extends Omit<DialogProps, "actions" | "closeModal" | "header" | "body"> {}
export const StyledDialog = styled.dialog<StyledDialogProps>(
	({ theme }) => css`
		min-width: ${dialogLayout.minWidth}rem;
		max-width: ${dialogLayout.maxWidth}rem;
		padding: ${dialogLayout.padding}rem;
		margin: auto;

		background-color: ${theme.color[dialogColors.container]};

		border-radius: ${theme.shape[dialogLayout.shapeFamily][dialogLayout.shapeScale]};

		// scrim
		&::backdrop {
			background-color: ${setAlphaOnHex(theme.color[dialogColors.scrim], dialogLayout.scrimOpacity)};
		}
	`
);

export interface StyledDialogHeaderProps extends Omit<DialogHeaderProps, "iconName" | "headline"> {
	centerAlign?: boolean;
}
export const StyledDialogHeader = styled.div<StyledDialogHeaderProps>(({ theme, centerAlign }) => {
	// if there is icon then center align
	// const centerAlign = !!iconName;
	return css`
		display: grid;
		gap: ${dialogLayout.iconTitleGap}rem;
		text-align: ${centerAlign ? "center" : "start"};
		padding-bottom: ${dialogLayout.titleBodyGap}rem;
	`;
});

export interface StyledDialogBodyProps extends DialogBodyProps {
	centerAlign?: boolean;
}
export const StyledDialogBody = styled.div<StyledDialogBodyProps>(({ theme, centerAlign }) => {
	return css`
		padding-bottom: ${dialogLayout.bodyActionsGap}rem;
		text-align: ${centerAlign ? "center" : "left"};
	`;
});

export type StyledDialogActionsProps = Omit<DialogActionsProps, "confirmingButton" | "dismissingButton"> & {
	twoButtons: boolean;
};
export const StyledDialogActions = styled.div<StyledDialogActionsProps>(({ theme, twoButtons }) => {
	return css`
		display: flex;
		justify-content: right;
		gap: ${dialogLayout.buttonsGap}rem;
	`;
});
