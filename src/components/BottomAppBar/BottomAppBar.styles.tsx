import styled, { css } from "styled-components";

export interface StyledBottomAppBarProps {}

export const StyledBottomAppBar = styled.div<StyledBottomAppBarProps>(
	({ theme }) => css`
		// layout
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		// sizing
		padding-inline: 0.25rem 1rem;
		max-width: 64rem;
		min-width: 20rem;
		height: 5rem;
		// colors
		background-color: ${theme.color.surface};

		// Surface Tone
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background-color: ${theme.color.surfaceTint};
			opacity: ${theme.surfaceToneOpacity.elevation2};
		}
	`
);

export const StyledIconsBar = styled.div(
	({ theme }) => css`
		display: flex;
	`
);
