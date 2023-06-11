import React, { MouseEventHandler } from "react";
import DialogHeader from "./DialogHeader";
import { TextProps } from "../Text";
import DialogSupportingText from "./DialogSupportingText";

export const dialogType = ["basic", "fullscreen"] as const;
export type DialogType = typeof dialogType[number];

// DIALOG MAIN COMPONENT
export interface DialogProps extends React.ComponentPropsWithRef<"dialog"> {
	type?: DialogType;
	idOfPortalElement?: string; // dialog will be rendered in a react.portal of this id
	closeModal?: MouseEventHandler;
	// header?: typeof DialogHeader
	// header?: JSX.Element;
	header?: React.ReactElement<DialogHeaderProps>;
	body?: JSX.Element;
	actions?: JSX.Element;
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
export interface DialogActionsProps extends React.ComponentPropsWithRef<"div"> {
	confirmButton: JSX.Element;
	cancelButton?: JSX.Element;
}
