import styled, { css } from "styled-components";
import { ElevationKey, Elevation } from "../../styles/theme";
import { BgColorType, ContentColorType } from "./FAB";

export interface StyledFABProps {
	bgColor?: BgColorType;
	contentColor?: ContentColorType;
	elevation?: Elevation;
	tooltip?: string;
}

export const StyledFAB = styled.button.attrs<StyledFABProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledFABProps>(({ theme, bgColor, contentColor, elevation }) => {
	const defaultElevation = elevation === 0 ? `elevation0` : (`elevation${elevation!}` as ElevationKey);
	const hoverElevation = elevation === 0 ? `elevation0` : (`elevation${elevation! + 1}` as ElevationKey);

	return css`
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 1rem;
		border: none;
		background-color: ${theme.color[bgColor!]};
		overflow: hidden;
		position: relative;
		box-shadow: ${theme.boxShadow[defaultElevation]};
		* {
			pointer-events: none;
		}

		// surface tint
		[data-md3role="surfaceTint"] {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			background-color: ${theme.color.primary};
			opacity: ${bgColor === "surface"
				? theme.surfaceToneOpacity[defaultElevation]
				: theme.surfaceToneOpacity.elevation0};
		}

		// state layer
		[data-md3role="stateLayer"] {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			background-color: ${theme.color[contentColor!]};
			opacity: 0;
		}

		// content layer
		[data-md3role="contentLayer"] {
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

		// States
		&:hover {
			box-shadow: ${theme.boxShadow[hoverElevation]};
		}
		&:hover [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}
		&:active [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}
	`;
});

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
	bgColor: "primaryContainer",
	contentColor: "primary",
	elevation: 3,
	tooltip: "",
};
