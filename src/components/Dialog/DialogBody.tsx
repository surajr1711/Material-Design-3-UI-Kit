import React from "react";
import { DialogBodyComposition, DialogBodyProps } from "./Dialog.types";
import DialogSupportingText from "./DialogSupportingText";

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(({ children, ...restProps }, ref) => {
	return (
		<div ref={ref} {...restProps}>
			{children}
		</div>
	);
}) as DialogBodyComposition;

DialogBody.SupportingText = DialogSupportingText;

export default DialogBody;
