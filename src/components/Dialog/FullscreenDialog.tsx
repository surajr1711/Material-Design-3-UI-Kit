import React, { useEffect, useState } from "react";
import Proptype from "prop-types";
import { FullscreenDialogProps } from "./Dialog.types";
import { FullscreenDialogWrapper, StyledFSDialogBody, StyledFullscreenDialog } from "./FullscreenDialog.styles";
import { createPortal } from "react-dom";
import Scrim from "../Scrim";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";
import DialogHeader from "./DialogHeader";
import Button from "../Button/Button";
import FullscreenDialogHeader from "./FullscreenDialogHeader";
import {
	DialogContext,
	// FullscreenDialogContext,
	FullscreenDialogContextProps,
} from "./useDialogContext";
import Text from "../Text";
import { useUniqueID } from "../../utils/useUniqueID";

const FullscreenDialog = React.forwardRef<HTMLDivElement, FullscreenDialogProps>(
	(
		{
			header = <FullscreenDialogHeader />,
			children = <Text typescale="bodyLarge" children="Dialog body" color="onSurface" />,
			actions = <DialogActions confirmingButton={<DialogActionsButton />} />,
			idOfPortalElement = "modal",
			dialogIsOpen = false,
			closeDialog,
			...restProps
		},
		ref
	) => {
		const headlineID = useUniqueID();
		// create headlineID which can be targeted for aria-labelledby. will be used in header via context.
		const contextValue: FullscreenDialogContextProps = {
			closeDialog,
			headlineID,
			type: "fullscreen",
		};

		if (!dialogIsOpen) return null;
		return createPortal(
			<DialogContext.Provider value={contextValue}>
				<Scrim />
				<FullscreenDialogWrapper>
					<StyledFullscreenDialog ref={ref} aria-labelledby={headlineID} role="alertdialog" {...restProps}>
						{header}
						<StyledFSDialogBody>{children}</StyledFSDialogBody>
						{actions}
					</StyledFullscreenDialog>
				</FullscreenDialogWrapper>
			</DialogContext.Provider>,
			document.getElementById(idOfPortalElement) as HTMLDivElement
		);
	}
);

FullscreenDialog.propTypes = {
	dialogIsOpen: Proptype.bool.isRequired,
	idOfPortalElement: Proptype.string,
	header: Proptype.element.isRequired,
	actions: Proptype.element.isRequired,
};

export default FullscreenDialog;
