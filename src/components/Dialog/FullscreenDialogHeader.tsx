import React from "react";
import Proptype from "prop-types";
import Button from "../Button/Button";
import { FullscreenDialogHeaderProps } from "./Dialog.types";
import IconButton from "../IconButton/IconButton";
import Text from "../Text/Text";
import { fullscreenDialogColors, fullscreenDialogLayout } from "./FullscreenDialog.styles";
import styled, { css } from "styled-components";
import { useDialogContext } from "./useDialogContext";
import DialogActionsButton from "./DialogActionsButton";

const StyledFSDialogHeader = styled.div((theme) => {
	return css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: ${fullscreenDialogLayout.headerHeight}rem;
		padding-inline: ${fullscreenDialogLayout.headerPaddingLeft}rem ${fullscreenDialogLayout.headerPaddingRight}rem;

		// remove confirming dialogactionsbutton on tablet and layouts
		@media (min-width: ${fullscreenDialogLayout.maxWidth}rem) {
			display: block;
			& > :last-child {
				display: none;
			}
		}
	`;
});

const CloseIconAndHeadlineDiv = styled.div`
	display: flex;
	align-items: center;
	gap: ${fullscreenDialogLayout.closeIconAndHeadlineGap}rem;

	// put headline first and icon last
	@media (min-width: ${fullscreenDialogLayout.maxWidth}rem) {
		padding-inline-start: ${fullscreenDialogLayout.headerPaddingRight}rem;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
`;

const FullscreenDialogHeader = React.forwardRef<HTMLDivElement, FullscreenDialogHeaderProps>(
	({ headline = "Full-screen dialog title", confirmingButtonLabel = "Save", ...restProps }, ref) => {
		// set default headline text if headline is empty string
		const headlineText = !!headline ? headline : "Headline";

		const { closeDialog, headlineID } = useDialogContext();

		return (
			<StyledFSDialogHeader ref={ref} {...restProps}>
				<CloseIconAndHeadlineDiv>
					<IconButton icon="close" variant="standard" onClick={closeDialog} />
					<Text
						typescale={fullscreenDialogLayout.headlineTypescale}
						color={fullscreenDialogColors.headline}
						id={headlineID}
						children={headlineText}
					/>
				</CloseIconAndHeadlineDiv>
				<DialogActionsButton label={confirmingButtonLabel} />
			</StyledFSDialogHeader>
		);
	}
);

FullscreenDialogHeader.displayName = "FullscreenDialogHeader";

FullscreenDialogHeader.propTypes = {
	headline: Proptype.string,
	confirmingButtonLabel: Proptype.string,
};

export default FullscreenDialogHeader;
