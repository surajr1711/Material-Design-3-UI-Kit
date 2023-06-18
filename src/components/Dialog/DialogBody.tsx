import React from "react";
import { DialogBodyComposition, DialogBodyProps } from "./Dialog.types";
import DialogSupportingText from "./DialogSupportingText";
import { StyledDialogBody } from "./BasicDialog.styles";
import { useDialogContext } from "./useDialogContext";

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(({ children, ...restProps }, ref) => {
	// const { centerAlign } = useDialogContext();
	const centerAlign = true;
	return (
		<StyledDialogBody ref={ref} centerAlign={centerAlign} {...restProps}>
			{!!children
				? children
				: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi molestias exercitationem voluptates libero, sapiente quia odio nam placeat unde?"}
		</StyledDialogBody>
	);
}) as DialogBodyComposition;

DialogBody.displayName = "DialogBody";

DialogBody.SupportingText = DialogSupportingText;

export default DialogBody;
