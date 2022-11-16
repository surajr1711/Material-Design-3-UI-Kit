import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

// export type IconButtonType = "standard" | "filled" | "tonal" | "outlined";
export type IconButtonBackgroundColorType = "primary" | "surfaceVariant" | "onSurface" | "secondaryContainer";
export type IconButtonContentColorType =
	| "primary"
	| "onPrimary"
	| "onSurface"
	| "onSecondaryContainer"
	| "onSurfaceVariant";

interface StyledIconButtonProps {
	toggleable?: boolean;
	toggledOn?: boolean;
	disabled?: boolean;
}

export const StyledFilledIconButton = styled.button.attrs<StyledIconButtonProps>(({ disabled }) => ({
	disabled: disabled,
}))<StyledIconButtonProps>(
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

		// state layer
		&::before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${!toggleable || toggledOn ? theme.color.onPrimary : theme.color.primary};
			opacity: 0;
		}

		&:hover::before {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}

		&:active::before {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
		&:disabled::before {
			opacity: ${theme.stateOpacity.stateLayer.disabled};
		}

		.contentLayer {
			position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	`
);

export const StyledTonalIconButton = styled(StyledFilledIconButton)(
	({ theme, toggleable, toggledOn }) => css`
		background-color: ${!toggleable || toggledOn ? theme.color.secondaryContainer : theme.color.surfaceVariant};

		/* state layer */
		&::before {
			background-color: ${!toggleable || toggledOn ? theme.color.onSecondaryContainer : theme.color.onSurfaceVariant};
		}
	`
);

StyledFilledIconButton.defaultProps = {
	toggleable: false,
	toggledOn: false,
	disabled: false,
};
