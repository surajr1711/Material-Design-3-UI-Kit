import styled, { css } from "styled-components";

import { BaseContainerColors, ThemeType } from "../../styles/theme";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export type ButtonColorType = "primary" | "secondary" | "tertiary" | "error";
export type VariantType = "filled" | "outlined" | "text" | "elevated" | "tonal";

export interface StyledButtonProps {
	color?: ButtonColorType;
	variant?: VariantType;
	disabled?: boolean;
}

// Make button variations css function. return
type ButtonVariantCSSType = (
	theme: ThemeType,
	color: ButtonColorType,
	variant: VariantType,
	disabled: boolean
) => string;

const buttonVariantCSS: ButtonVariantCSSType = (theme, color, variant, disabled) => {
	const bgDisabledColor = setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled);

	// filled variant has changes only to bg when disabled
	if (variant === "filled") {
		return `
			background-color: ${disabled ? bgDisabledColor : theme.color[color!]};
			&:hover {
				box-shadow: ${disabled ? "none" : theme.boxShadow.elevation1};
			}
		`;
	}
	// outlined variant has disabled styles for bg and border
	else if (variant === "outlined") {
		const outlineDisabledColor = setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled);
		return `
			background-color: ${disabled ? bgDisabledColor : "transparent"};
			border: 1px solid
				${disabled ? outlineDisabledColor : theme.color.outline};
		`;
	}
	// text variant only has smaller padding. No relevant disabled styles except for the content which is handled by typography content.
	else if (variant === "text") {
		return `
			& .contentLayer {
				padding-inline: 0.75rem;
			}
		`;
	}
	// elevated variant has background and box-shadow styles
	else if (variant === "elevated") {
		return `
			background-color: ${disabled ? bgDisabledColor : theme.color.surface};
			box-shadow: ${disabled ? "none" : theme.boxShadow.elevation1};
			&:hover {
				box-shadow: ${disabled ? "none" : theme.boxShadow.elevation2};
			}
		`;
	}
	// tonal button
	else {
		const tonalBgColor = (color + "Container") as BaseContainerColors;
		return `
			background-color: ${disabled ? bgDisabledColor : theme.color[tonalBgColor]};
			&:hover {
				box-shadow: ${disabled ? "none" : theme.boxShadow.elevation1};
			}
		`;
	}
};

export const StyledButton = styled.button<StyledButtonProps>(
	({ theme, color, variant, disabled }) => css`
		border: none;
		background-color: transparent;
		border-radius: 100rem;
		overflow: hidden;
		& * {
			pointer-events: none;
		}
		& .contentLayer {
			padding: 0.625rem 1.5rem;
			display: flex;
			align-items: center;
			gap: 1rem;
		}
		// variant specific css.
		${buttonVariantCSS(theme, color!, variant!, disabled!)}
	`
);

// StyledButton.defaultProps = {
// 	color: "primary",
// 	variant: "filled",
// 	disabled: false,
// };
