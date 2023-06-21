import React, { MouseEventHandler, SetStateAction, useRef, useState } from "react";
import { DialogType } from "./Dialog.types";

/* export const useDialogUtils = (type?: DialogType): {
	ref: React.RefObject<HTMLDialogElement>;
	// dialogIsOpen: boolean;
	// setDialogIsOpen: React.Dispatch<SetStateAction<boolean>>;
	openModal: MouseEventHandler<HTMLButtonElement>;
	closeModal: MouseEventHandler<HTMLButtonElement>;
} => {
	const ref = useRef<HTMLDialogElement>(null);
	const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

	const openModal: MouseEventHandler<HTMLButtonElement> = (e) => {

		ref.current?.showModal();
		setDialogIsOpen(true);
	};

	const closeModal: MouseEventHandler<HTMLButtonElement> = (e) => {
		ref.current?.close();
		console.log("closed");
		setDialogIsOpen(false);
	};

	return {
		ref,
		// dialogIsOpen,
		// setDialogIsOpen,
		openModal,
		closeModal,
	};
}; */

export function useDialogUtils(type?: "basic"): {
	ref: React.RefObject<HTMLDialogElement>;
	// dialogIsOpen: boolean;
	// setDialogIsOpen: React.Dispatch<SetStateAction<boolean>>;
	openDialog: MouseEventHandler<HTMLButtonElement>;
	closeDialog: MouseEventHandler<HTMLButtonElement>;
};
export function useDialogUtils(type: "fullscreen"): {
	ref: React.RefObject<HTMLDivElement>;
	dialogIsOpen: boolean;
	// setDialogIsOpen: React.Dispatch<SetStateAction<boolean>>;
	openDialog: MouseEventHandler<HTMLButtonElement>;
	closeDialog: MouseEventHandler<HTMLButtonElement>;
};

export function useDialogUtils(type?: DialogType) {
	// REFS
	const basicDialogRef = useRef<HTMLDialogElement>(null);
	const fullscreenDialogRef = useRef<HTMLDivElement>(null);

	// STATE
	const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

	// BASIC DIALOG EVENT HANDLERS (uses dialogelement ref)
	const openBasicDialog: MouseEventHandler<HTMLButtonElement> = (e) => {
		basicDialogRef.current?.showModal();
		setDialogIsOpen(true);
	};
	const closeBasicDialog: MouseEventHandler<HTMLButtonElement> = (e) => {
		basicDialogRef.current?.close();
		setDialogIsOpen(false);
	};

	// FULLSCREEN DIALOG EVENT HANDLERS (uses divelement ref)
	const openFullscreenDialog: MouseEventHandler<HTMLButtonElement> = (e) => {
		setDialogIsOpen(true);
		console.log("opened");
	};
	const closeFullscreenDialog: MouseEventHandler<HTMLButtonElement> = (e) => {
		setDialogIsOpen(false);
		console.log("closed");
	};

	const basicReturn = {
		ref: basicDialogRef,
		// dialogIsOpen,
		// setDialogIsOpen,
		openDialog: openBasicDialog,
		closeDialog: closeBasicDialog,
	};

	const fullscreenReturn = {
		ref: fullscreenDialogRef,
		dialogIsOpen,
		// setDialogIsOpen,
		openDialog: openFullscreenDialog,
		closeDialog: closeFullscreenDialog,
	};

	return type === "fullscreen" ? fullscreenReturn : basicReturn;

	/* 	switch (type) {
		case "fullscreen":
			return {
				ref: fullscreenDialogRef,
				dialogIsOpen,
				// setDialogIsOpen,
				openDialog: openFullscreenDialog,
				closeDialog: closeFullscreenDialog,
			};
		default:
			return {
				ref: basicDialogRef,
				// dialogIsOpen,
				// setDialogIsOpen,
				openDialog: openBasicDialog,
				closeDialog: closeBasicDialog,
			};
	} */
}
