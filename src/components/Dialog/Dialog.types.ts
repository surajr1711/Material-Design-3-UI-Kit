import React, { ComponentPropsWithRef, MouseEventHandler } from "react";
import { TextProps } from "../Text";
import DialogSupportingText from "./DialogSupportingText";
import { ButtonProps } from "../Button/Button.types";

export const dialogType = ["basic", "fullscreen"] as const;
export type DialogType = typeof dialogType[number];

// COMMON DIALOG PROPS
export interface DialogProps {
	// dialogIsOpen: boolean; // to render dialog or not
	closeDialog: MouseEventHandler; // for close button
	idOfPortalElement?: string; // dialog will be rendered in a react.portal of this id
	// header: React.ReactElement<FullscreenDialogHeaderProps>;
	body: React.ReactElement<DialogBodyProps>;
	actions: React.ReactElement<DialogActionsProps>;
}

/* // FULLSCREEN DIALOG COMPONENT
export interface FullscreenDialogProps extends React.ComponentPropsWithRef<"div"> {
	dialogIsOpen: boolean;
	closeModal: MouseEventHandler; // for close button
	idOfPortalElement?: string; // dialog will be rendered in a react.portal of this id
	header: React.ReactElement<FullscreenDialogHeaderProps>;
	body: React.ReactElement<DialogBodyProps>;
	actions: React.ReactElement<DialogActionsProps>;
} */

// FULLSCREEN DIALOG COMPONENT
export interface FullscreenDialogProps extends DialogProps, React.ComponentPropsWithRef<"div"> {
	dialogIsOpen: boolean;
	header: React.ReactElement<FullscreenDialogHeaderProps>;
}

export interface FullscreenDialogHeaderProps extends ComponentPropsWithRef<"div"> {
	// headline: string;
	// confirmingButtonLabel: string;
}

/* // BASIC DIALOG COMPONENT
export interface BasicDialogProps extends React.ComponentPropsWithRef<"dialog"> {
	dialogIsOpen: boolean;
	idOfPortalElement?: string; // dialog will be rendered in a react.portal of this id
	closeModal: MouseEventHandler;
	header: React.ReactElement<DialogHeaderProps>;
	body: React.ReactElement<DialogBodyProps>;
	actions: React.ReactElement<DialogActionsProps>;
	// header?: typeof DialogHeader
	// header?: JSX.Element;
	// body?: JSX.Element;
	// actions?: JSX.Element;
} */

// BASIC DIALOG COMPONENT
export interface BasicDialogProps extends DialogProps, React.ComponentPropsWithRef<"dialog"> {
	header: React.ReactElement<DialogHeaderProps>;
}

// BASIC DIALOG HEADER
export interface DialogHeaderProps extends React.ComponentPropsWithRef<"div"> {
	iconName?: string;
	headline: string;
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

/* // OVERLOAD
export interface DialogOverload {
	(type: "basic"): React.ForwardRefExoticComponent<BasicDialogProps & React.RefAttributes<HTMLDialogElement>>;
	(type: "fullscreen"): React.ForwardRefExoticComponent<FullscreenDialogProps & React.RefAttributes<HTMLDivElement>>;
}
 */
