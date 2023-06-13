import React from "react";
import { DialogBodyComposition, DialogBodyProps } from "./Dialog.types";
import DialogSupportingText from "./DialogSupportingText";
import { StyledDialogBody } from "./Dialog.style";
import { useDialogContext } from "./useDialogContext";

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(({ children, ...restProps }, ref) => {
	const { centerAlign } = useDialogContext();
	return (
		<StyledDialogBody ref={ref} centerAlign={centerAlign} {...restProps}>
			{children}
		</StyledDialogBody>
	);
}) as DialogBodyComposition;

DialogBody.SupportingText = DialogSupportingText;

export default DialogBody;
