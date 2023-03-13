import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

interface StyledIconButtonProps {
	toggleable?: boolean;
	toggledOn?: boolean;
}

export const StyledIconButton = styled.label<StyledIconButtonProps>(
	({ theme }) => css`
		// label container
		display: inline-block;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: ${theme.shape.rounded.full};
		border: none;
		overflow: hidden;
		position: relative;
		* {
			pointer-events: none;
		}

		// State layer
		[data-md3role="stateLayer"] {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			opacity: ${theme.stateOpacity.stateLayer.enabled};
		}

		// Content layer
		[data-md3role="contentLayer"] {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			// hide the checkbox square
			input {
				appearance: none;
			}
		}

		// STATES
		&:hover [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}

		&:active [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		&:has(input:disabled) [data-md3role="contentLayer"] {
			opacity: ${theme.stateOpacity.content.disabled};
		}
		&:has(input:disabled) [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.disabled};
		}
	`
);

export const StyledFilledIconButton = styled(StyledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		// Label container
		background-color: ${!toggleable || toggledOn ? theme.color.primary : theme.color.surfaceVariant};

		// State layer
		[data-md3role="stateLayer"] {
			background-color: ${!toggleable || toggledOn ? theme.color.onPrimary : theme.color.primary};
		}

		// Disabled
		&:has(input:disabled) {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
	`
);

export const StyledTonalIconButton = styled(StyledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		// Label container
		background-color: ${!toggleable || toggledOn ? theme.color.secondaryContainer : theme.color.surfaceVariant};

		// State layer
		[data-md3role="stateLayer"] {
			background-color: ${!toggleable || toggledOn ? theme.color.onSecondaryContainer : theme.color.onSurfaceVariant};
		}

		// Disabled
		&:has(input:disabled) {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
	`
);

export const StyledOutlinedIconButton = styled(StyledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		// Label container
		background-color: ${!toggleable || !toggledOn ? "transparent" : theme.color.inverseSurface};
		border: 1px solid ${!toggleable || !toggledOn ? theme.color.outline : "transparent"};

		// State layer
		[data-md3role="stateLayer"] {
			background-color: ${!toggleable || !toggledOn ? theme.color.onSurfaceVariant : theme.color.onInverseSurface};
		}

		// Disabled border color of label container
		&:has(input:disabled) {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
			border-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
		}
	`
);

export const StyledStandardIconButton = styled(StyledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		// Label container
		background-color: transparent;

		// State layer
		[data-md3role="stateLayer"] {
			background-color: ${!toggleable || !toggledOn ? theme.color.onSurfaceVariant : theme.color.primary};
		}
	`
);
