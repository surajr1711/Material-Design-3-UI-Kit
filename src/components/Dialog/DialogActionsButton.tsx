import React, { MouseEventHandler } from "react";
import Button from "../Button/Button";
import { DialogActionsButtonProps } from "./Dialog.types";
import { useDialogContext } from "./useDialogContext";
import { basicDialogLayout } from "./BasicDialog.styles";

const DialogActionsButton = React.forwardRef<HTMLButtonElement, DialogActionsButtonProps>(
	({ onClick, disabled = false, label = "OK", ...restProps }, ref) => {
		const { closeModal } = useDialogContext();
		const text = !!label ? label : "OK";

		const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
			if (disabled) return;
			closeModal(e);
			if (onClick) onClick(e);
		};

		return (
			<Button
				ref={ref}
				variant={basicDialogLayout.buttonVariant}
				disabled={disabled}
				onClick={handleClick}
				label={text}
				{...restProps}
			/>
		);
	}
);

export default DialogActionsButton;
