import React from "react";
import { createPortal } from "react-dom";
import Proptype from "prop-types";
import { BasicDialogProps, dialogType } from "./Dialog.types";
import { StyledBasicDialog } from "./BasicDialog.styles";
import DialogHeader from "./DialogHeader";
import { DialogContext, BasicDialogContextProps } from "./useDialogContext";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";
import { useUniqueID } from "../../utils/useUniqueID";

const BasicDialog = React.forwardRef<HTMLDialogElement, BasicDialogProps>(
	(
		{
			// dialogIsOpen = false,
			header = <DialogHeader headline="Headline" />,
			body = <DialogBody />,
			actions = <DialogActions confirmingButton={<DialogActionsButton />} />,
			idOfPortalElement = "modal",
			closeDialog,
			...restProps
		},
		ref
	) => {
		// center align if header's iconName prop is defined
		const centerAlign = !!header.props.iconName;
		// create headlineID which can be targeted for aria-labelledby. will be used in header via context.
		const headlineID = useUniqueID();
		// const ariaLabelledBy: string = header.props.headline.id;
		// CONTEXT to pass closemodal function to confirmingButton and dismissingButton, and to center align if header and body if header iconName prop is defined
		const contextValue: BasicDialogContextProps = {
			closeDialog,
			centerAlign,
			headlineID,
			type: "basic",
		};

		// if (!dialogIsOpen) return null;
		return createPortal(
			<DialogContext.Provider value={contextValue}>
				<StyledBasicDialog ref={ref} aria-labelledby={headlineID} role="alertdialog" {...restProps}>
					{header}
					{body}
					{actions}
				</StyledBasicDialog>
			</DialogContext.Provider>,
			document.getElementById(idOfPortalElement) as HTMLDivElement
		);
	}
);

BasicDialog.displayName = "BasicDialog";

BasicDialog.propTypes = {
	// dialogIsOpen: Proptype.bool.isRequired,
	idOfPortalElement: Proptype.string,
	header: Proptype.element.isRequired,
	body: Proptype.element.isRequired,
	actions: Proptype.element.isRequired,
};

export default BasicDialog;
