import React from "react";
import { DialogActionsProps } from "./Dialog.types";
import { StyledDialogActions } from "./BasicDialog.styles";
import DialogActionsButton from "./DialogActionsButton";

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
	({ confirmingButton = <DialogActionsButton />, dismissingButton, ...restProps }, ref) => {
		const twoButtons = !!confirmingButton && !!dismissingButton;

		return (
			<StyledDialogActions ref={ref} twoButtons={twoButtons} {...restProps}>
				{dismissingButton}
				{confirmingButton}
			</StyledDialogActions>
		);
	}
);

DialogActions.displayName = "DialogActions";

export default DialogActions;
