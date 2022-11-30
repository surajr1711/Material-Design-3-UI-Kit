import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

// export type IconButtonType = "standard" | "filled" | "tonal" | "outlined";
export type IconButtonBackgroundColorType = "primary" | "surfaceVariant" | "onSurface" | "secondaryContainer";
export type IconButtonContentColorType =
	| "primary"
	| "onPrimary"
	| "onSurface"
	| "onSecondaryContainer"
	| "onSurfaceVariant"
	| "onInverseSurface";

interface StyledIconButtonProps {
	toggleable?: boolean;
	toggledOn?: boolean;
	// disabled?: boolean;
}

export const StyledFilledIconButton = styled.button<StyledIconButtonProps>(
	({ theme, toggleable, toggledOn }) => css`
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 5rem;
		border: none;
		background-color: ${!toggleable || toggledOn ? theme.color.primary : theme.color.surfaceVariant};
		overflow: hidden;
		position: relative;
		* {
			pointer-events: none;
		}

		& > div[data-md3role="stateLayer"] {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${!toggleable || toggledOn ? theme.color.onPrimary : theme.color.primary};
			opacity: ${theme.stateOpacity.stateLayer.enabled};
		}
		& > div[data-md3role="contentLayer"] {
			// position: relative;
			// width: 100%;
			// height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		// STATES
		&:hover > div[data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}

		&:active > div[data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
		&:disabled > div[data-md3role="contentLayer"] {
			opacity: ${theme.stateOpacity.content.disabled};
		}
		&:disabled > div[data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.disabled};
		}
	`
);

export const StyledTonalIconButton = styled(StyledFilledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		background-color: ${!toggleable || toggledOn ? theme.color.secondaryContainer : theme.color.surfaceVariant};
		// state layer
		& > div[data-md3role="stateLayer"] {
			background-color: ${!toggleable || toggledOn ? theme.color.onSecondaryContainer : theme.color.onSurfaceVariant};
		}
	`
);

export const StyledOutlinedIconButton = styled(StyledFilledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		background-color: ${!toggleable || !toggledOn ? "transparent" : theme.color.inverseSurface};
		border: 1px solid ${theme.color.outline};
		// state layer
		& > div[data-md3role="stateLayer"] {
			background-color: ${!toggleable || !toggledOn ? theme.color.onSurfaceVariant : theme.color.onInverseSurface};
		}
		&:disabled {
			border-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
		}
	`
);

export const StyledStandardIconButton = styled(StyledFilledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		background-color: transparent;
		// state layer
		& > div[data-md3role="stateLayer"] {
			background-color: ${!toggleable || !toggledOn ? theme.color.onSurfaceVariant : theme.color.primary};
		}
		&:disabled {
			background-color: transparent;
		}
	`
);

StyledFilledIconButton.defaultProps = {
	toggleable: false,
	toggledOn: false,
	// disabled: false,
};
