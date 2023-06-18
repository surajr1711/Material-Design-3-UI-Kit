import React from "react";
import { FullscreenDialogProps } from "./Dialog.types";
import { StyledFullscreenDialog } from "./FullscreenDialog.styles";

const FullscreenDialog = React.forwardRef<HTMLDivElement, FullscreenDialogProps>(({ ...restProps }, ref) => {
	return (
		<StyledFullscreenDialog ref={ref} {...restProps}>
			FullscreenDialog
		</StyledFullscreenDialog>
	);
});

export default FullscreenDialog;
