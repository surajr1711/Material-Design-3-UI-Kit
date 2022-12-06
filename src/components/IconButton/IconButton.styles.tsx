import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

interface StyledIconButtonProps {
	toggleable?: boolean;
	toggledOn?: boolean;
}

const StyledIconButton = styled.label<StyledIconButtonProps>(
	({ theme }) => css`
		// label container
		display: inline-block;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 10rem;
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
/* export const StyledFilledIconButton = styled.label(
	({ theme }) => css`
		// label container
		display: inline-block;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 10rem;
		border: none;
		overflow: hidden;
		position: relative;
		* {
			pointer-events: none;
		}

		// label container background Color
		&:has(input[type="button"], input[type="checkbox"]:checked) {
			background-color: ${theme.color.primary};
		}
		&:has(input[type="checkbox"]:not(:checked)) {
			background-color: ${theme.color.surfaceVariant};
		}

		// State layer
		[data-md3role="stateLayer"] {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${theme.color.onPrimary};
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
		&:has(input:checked) {
			background-color: ${theme.color.primary};
		}

		&:hover [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}

		&:active [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		&:has(input[type="button"]:disabled, input[type="checkbox"]:disabled) {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
		&:has(input[type="button"]:disabled, input[type="checkbox"]:disabled) [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.disabled};
		}
		&:has(input[type="button"]:disabled, input[type="checkbox"]:disabled) [data-md3role="contentLayer"] {
			opacity: ${theme.stateOpacity.content.disabled};
		}
	`
); */

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
/* export const StyledTonalIconButton = styled(StyledFilledIconButton)(
	({ theme }) => css`
		// label container
		&:has(input[type="button"], input[type="checkbox"]:checked) {
			background-color: ${theme.color.secondaryContainer};
		}
		&:has(input[type="checkbox"]:not(:checked)) {
			background-color: ${theme.color.surfaceVariant};
		}
		// state layer
		&:has(input[type="button"], input[type="checkbox"]:checked) [data-md3role="stateLayer"] {
			background-color: ${theme.color.onSecondaryContainer};
		}
		&:has(input[type="checkbox"]:not(:checked)) [data-md3role="stateLayer"] {
			background-color: ${theme.color.surfaceVariant};
		}
		// disabled has to be provided even though same as original because hover css cascading overrides
		&:has(input[type="button"]:disabled, input[type="checkbox"]:disabled) {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
	`
); */

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

/* export const StyledOutlinedIconButton = styled(StyledFilledIconButton)(
	({ theme }) => css`
		// label container
		border: 1px solid ${theme.color.outline};
		&:has(input[type="button"], input[type="checkbox"]:not(:checked)) {
			background-color: transparent;
		}
		&:has(input[type="checkbox"]:checked) {
			background-color: ${theme.color.inverseSurface};
		}
		// state layer
		&:has(input[type="button"], input[type="checkbox"]:not(:checked)) [data-md3role="stateLayer"] {
			background-color: ${theme.color.onSurfaceVariant};
		}
		&:has(input[type="checkbox"]:checked) [data-md3role="stateLayer"] {
			background-color: ${theme.color.onInverseSurface};
		}

		// disabled state border color of label container
		&:has(input[type="button"]:disabled, input[type="checkbox"]:disabled) {
			border-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
		}
	`
); */

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
