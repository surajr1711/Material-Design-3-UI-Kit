import styled, { css } from "styled-components";

// export type FABColorType = AccentColorType | "surface";
export type FABBackgroundColorType = "primaryContainer" | "surface" | "secondaryContainer" | "tertiaryContainer";
// For state layer color
export type FABContentColorType = "onPrimaryContainer" | "primary" | "onSecondaryContainer" | "onTertiaryContainer";

export interface StyledFABProps {
	backgroundColor?: FABBackgroundColorType;
	contentColor?: FABContentColorType;
	tooltip?: string;
}

export const StyledFAB = styled.button.attrs<StyledFABProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledFABProps>(
	({ theme, backgroundColor, contentColor }) => css`
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 1rem;
		margin: 1rem;
		border: none;
		background-color: ${theme.color[backgroundColor!]};
		overflow: hidden;
		position: relative;
		box-shadow: ${theme.boxShadow.elevation3};
		/* * {
			pointer-events: none;
		} */

		// surface tone/tint
		&::before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			background-color: ${theme.color.primary};
			opacity: ${backgroundColor === "surface"
				? theme.surfaceToneOpacity.elevation3
				: theme.surfaceToneOpacity.elevation0};
		}

		// state layer
		&::after {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			background-color: ${theme.color[contentColor!]};
			opacity: 0;
		}

		&:hover {
			box-shadow: ${theme.boxShadow.elevation4};
		}
		&:hover::after {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}

		&:active::after {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		.contentLayer {
			position: relative;
			width: 100%;
			height: 100%;
			padding-inline: 1rem;
			z-index: 3;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
		}
	`
);

export const StyledSmallFAB = styled(StyledFAB)`
	height: 2.5rem;
	width: 2.5rem;
	border-radius: 0.75rem;
`;

export const StyledLargeFAB = styled(StyledFAB)`
	height: 6rem;
	width: 6rem;
	border-radius: 1.75rem;
`;

export const StyledExtendedFAB = styled(StyledFAB)`
	width: auto;
`;

StyledFAB.defaultProps = {
	backgroundColor: "primaryContainer",
	contentColor: "primary",
	tooltip: "",
};
