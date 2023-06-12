import React, { MouseEventHandler } from "react";
import DialogHeader from "./DialogHeader";
import { TextProps } from "../Text";
import DialogSupportingText from "./DialogSupportingText";
import { ButtonProps } from "../Button/Button.types";

export const dialogType = ["basic", "fullscreen"] as const;
export type DialogType = typeof dialogType[number];

// DIALOG MAIN COMPONENT
export interface DialogProps extends React.ComponentPropsWithRef<"dialog"> {
	type?: DialogType;
	idOfPortalElement?: string; // dialog will be rendered in a react.portal of this id
	closeModal: MouseEventHandler;
	header?: React.ReactElement<DialogHeaderProps>;
	body?: React.ReactElement<DialogBodyProps>;
	actions: React.ReactElement<DialogActionsProps>;
	// header?: typeof DialogHeader
	// header?: JSX.Element;
	// body?: JSX.Element;
	// actions?: JSX.Element;
}

// DIALOG HEADER
export interface DialogHeaderProps extends React.ComponentPropsWithRef<"div"> {
	iconName?: string;
	headline?: string;
}

// DIALOG BODY
export interface DialogBodyProps extends React.ComponentPropsWithRef<"div"> {}

export interface DialogSupportingTextProps extends Omit<TextProps, "color" | "typescale"> {}

export interface DialogBodyComposition
	extends React.ForwardRefExoticComponent<DialogBodyProps & React.RefAttributes<HTMLDivElement>> {
	SupportingText: typeof DialogSupportingText;
}

// DIALOG ACTIONS
export interface DialogActionsButtonProps extends Omit<ButtonProps, "variant" | "icon"> {}
export interface DialogActionsProps extends React.ComponentPropsWithRef<"div"> {
	confirmingButton: React.ReactElement<DialogActionsButtonProps>;
	dismissingButton?: React.ReactElement<DialogActionsButtonProps>;
}
