import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export const StyledBottomSheet = styled.div(
	({ theme }) => css`
		background-color: ${theme.color.surface};
		max-width: 40rem;
		min-width: 20rem;
		width: 100vw;
		height: 30rem;
		margin-inline: auto;
		margin-top: 4.5rem;
		border-radius: ${theme.shape.rounded.extraLargeTop};
		box-shadow: ${theme.elevation.boxShadow.level1};
		padding-top: 1.375rem;
		overflow: hidden;
		position: relative;
		&:before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${setAlphaOnHex(theme.color.surfaceTint, theme.elevation.surfaceTintOpacity.level1 as number)};
		}
		.dragHandle {
			background-color: ${setAlphaOnHex(theme.color.onSurfaceVariant, 0.4)};
			width: 2rem;
			height: 0.25rem;
			border-radius: ${theme.shape.rounded.large};
			margin-inline: auto;
			margin-bottom: 1.375rem;
			position: relative; // sets this child above the :before pseudoelement
		}
	`
);
