import React, { useEffect, useState } from "react";
import Proptype from "prop-types";
import { FullscreenDialogProps } from "./Dialog.types";
import { FullscreenDialogWrapper, StyledFullscreenDialog } from "./FullscreenDialog.styles";
import { createPortal } from "react-dom";
import Scrim from "../Scrim";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";
import DialogHeader from "./DialogHeader";
import Button from "../Button/Button";

const FullscreenDialog = React.forwardRef<HTMLDivElement, FullscreenDialogProps>(
	(
		{
			header = <DialogHeader headline="Headline" />,
			body = <DialogBody />,
			actions = <DialogActions confirmingButton={<DialogActionsButton />} />,
			idOfPortalElement = "modal",
			dialogIsOpen = false,
			closeDialog,
			...restProps
		},
		ref
	) => {
		// const [isOpen, setIsOpen] = useState<boolean>(dialogIsOpen);

		// useEffect(() => {
		// 	setIsOpen((prev) => !prev);
		// }, [dialogIsOpen]);

		// if (!isOpen) return null;
		if (!dialogIsOpen) return null;
		return createPortal(
			<>
				<Scrim />
				<FullscreenDialogWrapper>
					<StyledFullscreenDialog ref={ref} {...restProps}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit! Quae, vitae dicta. Voluptatum
						delectus quis numquam commodi reprehenderit nostrum!
						{/* {header}
						{body}
						{actions} */}
						<Button onClick={closeDialog} label="Close" />
					</StyledFullscreenDialog>
				</FullscreenDialogWrapper>
			</>,
			document.getElementById(idOfPortalElement) as HTMLDivElement
		);
	}
);

FullscreenDialog.propTypes = {
	dialogIsOpen: Proptype.bool.isRequired,
	idOfPortalElement: Proptype.string,
	header: Proptype.element.isRequired,
	body: Proptype.element.isRequired,
	actions: Proptype.element.isRequired,
};

export default FullscreenDialog;
