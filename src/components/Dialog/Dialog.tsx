import React from "react";
import { BasicDialogProps, DialogType, FullscreenDialogProps, DialogOverload } from "./Dialog.types";
import BasicDialog from "./BasicDialog";
import FullscreenDialog from "./FullscreenDialog";

const componentMap = {
	basic: BasicDialog,
	fullscreen: FullscreenDialog,
};

// const Dialog: DialogOverload = (type) => {
// 	return componentMap[type as keyof typeof componentMap];
// };

// Overload signature 1
function Dialog(
	type: "basic"
): React.ForwardRefExoticComponent<BasicDialogProps & React.RefAttributes<HTMLDialogElement>>;

// Overload signature 2
function Dialog(
	type: "fullscreen"
): React.ForwardRefExoticComponent<FullscreenDialogProps & React.RefAttributes<HTMLDivElement>>;

// Function declaration
function Dialog(type: DialogType) {
	return componentMap[type as keyof typeof componentMap];
}

export default Dialog;
