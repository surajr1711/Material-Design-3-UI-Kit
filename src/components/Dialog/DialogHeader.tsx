import React from "react";
import { DialogHeaderProps } from "./Dialog.types";
import Icon from "../Icon/Icon";
import { StyledDialogHeader, dialogColors, dialogLayout } from "./Dialog.style";
import Text from "../Text/Text";
import Proptype from "prop-types";

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
	({ iconName, headline, ...restProps }, ref) => {
		// Don't allow empty string
		const showIcon = !!iconName;

		const headlineText = !!headline ? headline : "Headline";
		// const showHeadline = !!headline;

		// if (!showIcon && !showHeadline) return null;

		return (
			<StyledDialogHeader ref={ref} centerAlign={showIcon} {...restProps}>
				{showIcon && <Icon color={dialogColors.icon} sizeInRems={dialogLayout.iconSize} children={iconName} />}
				{/* {showHeadline && <Text color={dialogColors.headline} typescale={dialogLayout.headline} children={headline} />} */}
				{<Text color={dialogColors.headline} typescale={dialogLayout.headline} children={headlineText} />}
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
