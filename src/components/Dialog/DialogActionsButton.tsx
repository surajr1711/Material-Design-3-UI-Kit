import React, { MouseEventHandler } from "react";
import Button from "../Button/Button";
import { DialogActionsButtonProps } from "./Dialog.types";
import { useDialogContext } from "./useDialogContext";
import { dialogLayout } from "./Dialog.style";

const DialogActionsButton = React.forwardRef<HTMLButtonElement, DialogActionsButtonProps>(
	({ onClick, disabled, ...restProps }, ref) => {
		const { closeModal } = useDialogContext();

		const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
			if (disabled) return;
			closeModal(e);
			if (onClick) onClick(e);
		};

		return (
			<Button ref={ref} variant={dialogLayout.buttonVariant} disabled={disabled} onClick={handleClick} {...restProps} />
		);
	}
);

export default DialogActionsButton;
