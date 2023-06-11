import React from "react";
import { createPortal } from "react-dom";
import Proptype from "prop-types";
import { DialogProps, dialogType } from "./Dialog.types";
import IconButton from "../IconButton/IconButton";
import { StyledDialog } from "./Dialog.style";
import DialogHeader from "./DialogHeader";

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
	({ header, body, idOfPortalElement = "modal", closeModal, ...restProps }, ref) => {
		const showHeader = !!header;
		const showBody = !!body;

		return createPortal(
			<StyledDialog ref={ref} {...restProps}>
				{header}
				{body}

				{/*
				{showHeader && header}
				{showBody && body} */}

				<IconButton icon="close" onClick={closeModal} />
			</StyledDialog>,
			document.getElementById(idOfPortalElement) as HTMLDivElement
		);
	}
);

Dialog.propTypes = {
	type: Proptype.oneOf(dialogType),
	idOfPortalElement: Proptype.string,
	header: Proptype.element,
	body: Proptype.element,
	actions: Proptype.element,
};

export default Dialog;
