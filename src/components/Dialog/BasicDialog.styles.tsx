import styled, { css } from "styled-components";
import { DialogActionsProps, DialogBodyProps, DialogHeaderProps, BasicDialogProps } from "./Dialog.types";
import { ShapeFamily } from "../../styles/shape";
import { ShapeScale } from "../../styles/shape";
import { Color } from "../../styles/colors";
import { Typescale } from "../../styles/typescale";
import { ButtonVariant } from "../Button/Button.types";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { ComponentPropsWithoutRef } from "react";

type BasicDialogLayout = {
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

export const basicDialogLayout: BasicDialogLayout = {
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

type BasicDialogColors = {
	container: Color;
	icon: Color;
	headline: Color;
	supportingText: Color;
	scrim: Color;
};
export const basicDialogColors: BasicDialogColors = {
	container: "surface",
	icon: "secondary",
	headline: "onSurface",
	supportingText: "onSurfaceVariant",
	scrim: "scrim",
};

export interface StyledBasicDialogProps
	extends Omit<BasicDialogProps, "actions" | "closeDialog" | "header" | "body" | "dialogIsOpen"> {}
export const StyledBasicDialog = styled.dialog<StyledBasicDialogProps>(
	({ theme }) => css`
		min-width: ${basicDialogLayout.minWidth}rem;
		max-width: ${basicDialogLayout.maxWidth}rem;
		padding: ${basicDialogLayout.padding}rem;
		margin: auto;

		position: relative;
		z-index: 10;

		background-color: ${theme.color[basicDialogColors.container]};

		border-radius: ${theme.shape[basicDialogLayout.shapeFamily][basicDialogLayout.shapeScale]};

		// scrim
		&::backdrop {
			background-color: ${setAlphaOnHex(theme.color[basicDialogColors.scrim], basicDialogLayout.scrimOpacity)};
		}
	`
);

export interface StyledDialogHeaderProps extends Omit<DialogHeaderProps, "iconName" | "headline"> {
	centerAlign?: boolean;
}
export const StyledDialogHeader = styled.div<StyledDialogHeaderProps>(({ theme, centerAlign }) => {
	return css`
		display: grid;
		gap: ${basicDialogLayout.iconTitleGap}rem;
		text-align: ${centerAlign ? "center" : "start"};
		padding-bottom: ${basicDialogLayout.titleBodyGap}rem;
	`;
});

export interface StyledDialogBodyProps extends DialogBodyProps {
	centerAlign?: boolean;
}
export const StyledDialogBody = styled.div<StyledDialogBodyProps>(({ theme, centerAlign }) => {
	return css`
		padding-bottom: ${basicDialogLayout.bodyActionsGap}rem;
		text-align: ${centerAlign ? "center" : "left"};
	`;
});

// export type StyledDialogActionsProps = Omit<DialogActionsProps, "confirmingButton" | "dismissingButton"> & {
// 	twoButtons: boolean;
// };
export const StyledBasicDialogActions = styled.div`
	display: flex;
	justify-content: right;
	gap: ${basicDialogLayout.buttonsGap}rem;
`;
