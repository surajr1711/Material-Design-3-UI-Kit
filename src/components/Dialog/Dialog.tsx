import React from "react";
import { createPortal } from "react-dom";
import Proptype from "prop-types";
import { DialogProps, dialogType } from "./Dialog.types";
import { StyledDialog } from "./Dialog.style";
import DialogHeader from "./DialogHeader";
import { DialogContext, DialogContextObj } from "./useDialogContext";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	(
		{
			header = <DialogHeader headline="Headline" />,
			body = <DialogBody />,
			actions = <DialogActions confirmingButton={<DialogActionsButton />} />,
			idOfPortalElement = "modal",
			closeModal,
			...restProps
		},
		ref
	) => {
		// center align if header's iconName prop is defined
		const centerAlign = !!header?.props.iconName;
		// CONTEXT to pass closemodal function to confirmingButton and dismissingButton, and to center align if header and body if header iconName prop is defined
		const contextValue: DialogContextObj = {
			closeModal,
			centerAlign,
		};

		return createPortal(
			<DialogContext.Provider value={contextValue}>
				<StyledDialog ref={ref} {...restProps}>
					{header}
					{body}
					{actions}
				</StyledDialog>
			</DialogContext.Provider>,
			document.getElementById(idOfPortalElement) as HTMLDivElement
		);
	}
);

Dialog.displayName = "Dialog";

Dialog.propTypes = {
	type: Proptype.oneOf(dialogType),
	idOfPortalElement: Proptype.string,
	header: Proptype.element.isRequired,
	body: Proptype.element.isRequired,
	actions: Proptype.element.isRequired,
};

export default Dialog;
