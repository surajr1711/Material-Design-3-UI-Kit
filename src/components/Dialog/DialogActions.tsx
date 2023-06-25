import React from "react";
import { DialogActionsProps, DialogType } from "./Dialog.types";
import { StyledBasicDialog, StyledBasicDialogActions } from "./BasicDialog.styles";
import DialogActionsButton from "./DialogActionsButton";
import { useDialogContext } from "./useDialogContext";
import { StyledFSDialogActions } from "./FullscreenDialog.styles";

const DialogComponentMap: { [T in DialogType]: React.ElementType } = {
	basic: StyledBasicDialogActions,
	fullscreen: StyledFSDialogActions,
};

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
	({ confirmingButton = <DialogActionsButton />, dismissingButton, ...restProps }, ref) => {
		const { type } = useDialogContext();
		const Component = DialogComponentMap[type];

		return (
			<Component ref={ref} {...restProps}>
				{dismissingButton}
				{confirmingButton}
			</Component>
		);
	}
);

DialogActions.displayName = "DialogActions";

export default DialogActions;
