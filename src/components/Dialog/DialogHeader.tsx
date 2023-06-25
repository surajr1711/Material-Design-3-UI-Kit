import React from "react";
import { DialogHeaderProps } from "./Dialog.types";
import Icon from "../Icon/Icon";
import { StyledDialogHeader, basicDialogColors, basicDialogLayout } from "./BasicDialog.styles";
import Text from "../Text/Text";
import Proptype from "prop-types";
import { useDialogContext } from "./useDialogContext";

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
	({ iconName, headline, ...restProps }, ref) => {
		// show icon only if iconName is not empty string or undefined
		const showIcon = !!iconName;
		// set default headline text if headline is empty string
		const headlineText = !!headline ? headline : "Headline";
		// get headlineID from context. used by parent dialog component for aria-labelledby.
		const { headlineID } = useDialogContext();

		return (
			<StyledDialogHeader ref={ref} centerAlign={showIcon} {...restProps}>
				{showIcon && (
					<Icon color={basicDialogColors.icon} sizeInRems={basicDialogLayout.iconSize} children={iconName} />
				)}
				{
					<Text
						color={basicDialogColors.headline}
						typescale={basicDialogLayout.headline}
						id={headlineID}
						children={headlineText}
					/>
				}
			</StyledDialogHeader>
		);
	}
);

DialogHeader.displayName = "DialogHeader";

DialogHeader.propTypes = {
	iconName: Proptype.string,
	headline: Proptype.string.isRequired,
};

export default DialogHeader;
