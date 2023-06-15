import { MouseEventHandler, SetStateAction, useRef, useState } from "react";

export const useDialogUtils = (): {
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
};
