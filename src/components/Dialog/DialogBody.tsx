import React from "react";
import { DialogBodyComposition, DialogBodyProps } from "./Dialog.types";
import DialogSupportingText from "./DialogSupportingText";
import { StyledDialogBody } from "./BasicDialog.styles";
import { useDialogContext } from "./useDialogContext";

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(({ children, ...restProps }, ref) => {
	const context = useDialogContext();
	// check if context has centerAlign property. Will only be present if dialog type is 'basic'
	const hasCenterAlign = "centerAlign" in context;
	const centerAlign = hasCenterAlign ? context.centerAlign : false;
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
