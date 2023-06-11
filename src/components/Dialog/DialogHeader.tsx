import React from "react";
import { DialogHeaderProps } from "./Dialog.types";
import styled, { css } from "styled-components";
import Icon from "../Icon/Icon";
import { dialogColors, dialogLayout } from "./Dialog.style";
import Text from "../Text/Text";
import Proptype from "prop-types";

const StyledDialogHeader = styled.div<DialogHeaderProps>(({ theme, iconName }) => {
	// if there is icon then center align
	const centerAlign = !!iconName;

	return css`
		display: grid;
		gap: ${dialogLayout.iconTitleGap}rem;
		text-align: ${centerAlign ? "center" : "start"};
	`;
});

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
	({ iconName, headline, ...restProps }, ref) => {
		const showIcon = !!iconName;
		const showHeadline = !!headline;

		if (!showIcon && !showHeadline) return null;

		return (
			<StyledDialogHeader ref={ref} iconName={iconName} {...restProps}>
				{showIcon && <Icon color={dialogColors.icon} sizeInRems={dialogLayout.iconSize} children={iconName} />}
				{showHeadline && <Text color={dialogColors.headline} typescale={dialogLayout.headline} children={headline} />}
			</StyledDialogHeader>
		);
	}
);

DialogHeader.propTypes = {
	iconName: Proptype.string,
	headline: Proptype.string,
};

export default DialogHeader;
