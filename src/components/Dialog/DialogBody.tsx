import React from "react";
import { DialogBodyComposition, DialogBodyProps } from "./Dialog.types";
import DialogSupportingText from "./DialogSupportingText";
import { StyledDialogBody } from "./Dialog.style";

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(({ children, ...restProps }, ref) => {
	return (
		<StyledDialogBody ref={ref} {...restProps}>
			{children}
		</StyledDialogBody>
	);
}) as DialogBodyComposition;

DialogBody.SupportingText = DialogSupportingText;

export default DialogBody;
