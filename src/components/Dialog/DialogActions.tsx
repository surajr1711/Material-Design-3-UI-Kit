import React from "react";
import { DialogActionsProps } from "./Dialog.types";
import { StyledDialogActions } from "./Dialog.style";
import DialogActionsButton from "./DialogActionsButton";

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
	({ confirmingButton, dismissingButton, ...restProps }, ref) => {
		const twoButtons = !!confirmingButton && !!dismissingButton;

		return (
			<StyledDialogActions ref={ref} twoButtons={twoButtons} {...restProps}>
				{dismissingButton}
				{confirmingButton}
			</StyledDialogActions>
		);
	}
);

export default DialogActions;
