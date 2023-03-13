import styled, { css } from "styled-components";

import { ContainerColor } from "../../styles/colors";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { ButtonColor, ButtonContentColor, ButtonVariant } from "./Button.types";

interface StyledButtonProps {
	color?: ButtonColor;
	variant?: ButtonVariant;
	stateLayerColor?: ButtonContentColor;
}

export const StyledButton = styled.button<StyledButtonProps>(({ theme, stateLayerColor }) => {
	return css`
		// Button Container
		border: none;
		border-radius: ${theme.shape.rounded.full};
		overflow: hidden;
		height: 2.5rem;
		position: relative; // allows for surfaceTone and stateLayer position absolute
		& * {
			pointer-events: none;
		}

		// State Layer
		[data-md3role="stateLayer"] {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: ${theme.color[stateLayerColor!]};
			opacity: ${theme.stateOpacity.stateLayer.enabled};
		}

		// Content Layer
		[data-md3role="contentLayer"] {
			padding: 0.625rem 1.5rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		// STATES
		&:hover [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}
		&:active [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		// variant specific css. Contains state css. Must be placed before disabled css otherwise hover css overrides disabled css. Because in css even though a button is disabled, it can be hovered.

		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
		&:disabled [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.disabled};
		}
		&:disabled [data-md3role="contentLayer"] {
			opacity: ${theme.stateOpacity.content.disabled};
		}
	`;
});

export const FilledButton = styled(StyledButton)(
	({ theme, color }) => css`
		// Button Container
		background-color: ${theme.color[color!]};
		// States
		&:hover {
			box-shadow: ${theme.elevation.boxShadow.level1};
		}
		&:disabled {
			box-shadow: ${theme.elevation.boxShadow.level0};
		}
	`
);

export const OutlinedButton = styled(StyledButton)(({ theme }) => {
	return css`
		// CSS Variables
		--outlineDisabledColor: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
		// Button Container
		background-color: transparent;
		border: 1px solid ${theme.color.outline};
		// States
		&:disabled {
			border: 1px solid var(--outlineDisabledColor);
		}
	`;
});

export const TextButton = styled(StyledButton)`
	// Button Container
	background-color: transparent;
	// Content layer
	[data-md3role="contentLayer"] {
		padding-inline: 0.75rem;
	}
`;

export const ElevatedButton = styled(StyledButton)(({ theme, color }) => {
	return css`
		// Button Container
		background-color: ${theme.color.surface};
		box-shadow: ${theme.elevation.boxShadow.level1};
		// Surface tint
		[data-md3role="surfaceTint"] {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: ${theme.color[color!]};
			opacity: ${theme.elevation.surfaceTintOpacity.level1};
		}
		//States
		&:hover {
			box-shadow: ${theme.elevation.boxShadow.level2};
		}
		&:disabled {
			box-shadow: ${theme.elevation.boxShadow.level0};
		}
		&:disabled [data-md3role="surfaceTint"] {
			opacity: ${theme.stateOpacity.surfaceTint.disabled};
		}
	`;
});

export const TonalButton = styled(StyledButton)(({ theme, color }) => {
	const tonalBgColor = `${color}Container` as ContainerColor;
	return css`
		// Button Container
		background-color: ${theme.color[tonalBgColor]};
		// States
		&:hover {
			box-shadow: ${theme.elevation.boxShadow.level1};
		}
		&:disabled {
			box-shadow: ${theme.elevation.boxShadow.level0};
		}
	`;
});
