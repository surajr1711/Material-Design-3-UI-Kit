import styled, { css } from "styled-components";

import { ContainerColorType } from "../../styles/theme";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { ContentColorType } from "../Typography";
import { ColorType, VariantType } from "./Button";

interface StyledButtonProps {
	color?: ColorType;
	variant?: VariantType;
	stateLayerColor?: ContentColorType;
}

const filledButtonCSS = css<StyledButtonProps>(({ theme, color }) => {
	return css`
		background-color: ${theme.color[color!]};
		&:hover {
			box-shadow: ${theme.boxShadow.elevation1};
		}
	`;
});

const outlinedButtonCSS = css<StyledButtonProps>(({ theme }) => {
	const outlineDisabledColor = setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled);
	return css`
		border: 1px solid ${theme.color.outline};
		&:disabled {
			border: 1px solid ${outlineDisabledColor};
		}
	`;
});

const textButtonCSS = css<StyledButtonProps>(() => {
	return css`
		& > div[data-md3role="contentLayer"] {
			padding-inline: 0.75rem;
		}
	`;
});

const elevatedButtonCSS = css<StyledButtonProps>(({ theme, color }) => {
	return css`
		background-color: ${theme.color.surface};
		box-shadow: ${theme.boxShadow.elevation1};
		// surface tint
		& > div[data-md3role="surfaceTint"] {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: ${theme.color[color!]};
			opacity: ${theme.surfaceToneOpacity.elevation1};
		}
		&:hover {
			box-shadow: ${theme.boxShadow.elevation2};
		}
		&:disabled > div[data-md3role="surfaceTint"] {
			opacity: ${theme.stateOpacity.surfaceTint.disabled};
		}
	`;
});

const tonalButtonCSS = css<StyledButtonProps>(({ theme, color }) => {
	const tonalBgColor = `${color}Container` as ContainerColorType;
	return css`
		background-color: ${theme.color[tonalBgColor]};
		&:hover {
			box-shadow: ${theme.boxShadow.elevation1};
		}
	`;
});

const buttonVariantCSS = css<StyledButtonProps>(({ variant }) => {
	switch (variant!) {
		case "outlined":
			return outlinedButtonCSS;
		case "elevated":
			return elevatedButtonCSS;
		case "text":
			return textButtonCSS;
		case "tonal":
			return tonalButtonCSS;
		default:
			return filledButtonCSS;
	}
});

// const bgDisabledColor = css(({ theme }) => setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled));

export const StyledButton = styled.button<StyledButtonProps>(({ theme, stateLayerColor }) => {
	return css`
		border: none;
		background-color: transparent;
		border-radius: 100rem;
		overflow: hidden;
		height: 2.5rem;
		position: relative; // allows for surfaceTone and stateLayer position absolute
		& * {
			pointer-events: none;
		}

		& > div[data-md3role="stateLayer"] {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: ${theme.color[stateLayerColor!]};
			opacity: ${theme.stateOpacity.stateLayer.enabled};
		}
		& > div[data-md3role="contentLayer"] {
			padding: 0.625rem 1.5rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		// STATES
		&:hover > div[data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}
		&:active > div[data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		// variant specific css. Contains state css. Must be placed before disabled css otherwise hover css overrides disabled css. Because in css even though a button is disabled, it can be hovered.
		${buttonVariantCSS}

		&:disabled > div[data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.disabled};
		}
		&:disabled > div[data-md3role="contentLayer"] {
			opacity: ${theme.stateOpacity.content.disabled};
		}
		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
			box-shadow: none;
		}
	`;
});
