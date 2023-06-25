import { MouseEventHandler, createContext, useContext } from "react";
import { DialogType } from "./Dialog.types";

export type DialogContextProps = {
	closeDialog: MouseEventHandler; // to pass close dialog to header and actions bar buttons
	headlineID: string; // for aria-labelledby
	type: DialogType; // used in dialogActions to return fullscreen or basic styles
};

export type BasicDialogContextProps = DialogContextProps & {
	centerAlign: boolean; // centers dialog body content if variant is basic dialog and dialog header has an icon
};
export type FullscreenDialogContextProps = DialogContextProps;

export const DialogContext = createContext<BasicDialogContextProps | FullscreenDialogContextProps | null>(null);

export function useDialogContext(): BasicDialogContextProps | FullscreenDialogContextProps {
	const context = useContext(DialogContext);

	if (!context) {
		throw new Error("Dialog Subcomponents must be used within Dialog component.");
	}
	return context;
}
