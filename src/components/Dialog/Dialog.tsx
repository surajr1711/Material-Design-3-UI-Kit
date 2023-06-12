import React from "react";
import { createPortal } from "react-dom";
import Proptype from "prop-types";
import { DialogProps, dialogType } from "./Dialog.types";
import IconButton from "../IconButton/IconButton";
import { StyledDialog } from "./Dialog.style";
import DialogHeader from "./DialogHeader";
import { DialogContext, DialogContextObj } from "./useDialogContext";

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	({ header, body, actions, idOfPortalElement = "modal", closeModal, ...restProps }, ref) => {
		// CONTEXT to pass closemodal and cancelmodal to confirmingButton and dismissingButton respectively
		const contextValue: DialogContextObj = {
			closeModal: closeModal,
		};

		const showHeader = !!header;
		const showBody = !!body;

		return createPortal(
			<DialogContext.Provider value={contextValue}>
				<StyledDialog ref={ref} {...restProps}>
					{showHeader && header}
					{showBody && body}
					{actions}

					<IconButton icon="close" onClick={closeModal} />
				</StyledDialog>
			</DialogContext.Provider>,
			document.getElementById(idOfPortalElement) as HTMLDivElement
		);
	}
);

Dialog.propTypes = {
	type: Proptype.oneOf(dialogType),
	idOfPortalElement: Proptype.string,
	header: Proptype.element,
	body: Proptype.element,
	actions: Proptype.element.isRequired,
};

export default Dialog;
