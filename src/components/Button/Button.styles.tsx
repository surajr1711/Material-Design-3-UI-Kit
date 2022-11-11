import styled, { css } from "styled-components";

import { ContainerColorType } from "../../styles/theme";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export type ButtonColorType = "primary" | "secondary" | "tertiary" | "error";
export type VariantType = "filled" | "outlined" | "text" | "elevated" | "tonal";

export interface StyledButtonProps {
	color?: ButtonColorType;
	variant?: VariantType;
	disabled?: boolean;
}

const buttonVariantCSS = css<StyledButtonProps>(({ theme, color, variant }) => {
	switch (variant) {
		case "filled":
			return `
					background-color: ${theme.color[color!]};
					&:hover {
						box-shadow: ${theme.boxShadow.elevation1};
					}
					&:disabled {
						box-shadow: none;
					}
				`;

		case "outlined":
			const outlineDisabledColor = setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled);
			return `
					background-color: transparent;
					border: 1px solid	${theme.color.outline};
					&:disabled {
						border: 1px solid ${outlineDisabledColor};
					}
				`;

		case "text":
			return `
					& .contentLayer {
						padding-inline: 0.75rem;
					}
				`;

		case "elevated":
			const surfaceTone1 = setAlphaOnHex(theme.color[color!], theme.surfaceToneOpacity.elevation1);
			const surfaceTone2 = setAlphaOnHex(theme.color[color!], theme.surfaceToneOpacity.elevation2);
			return `
					background-color: ${surfaceTone1};
					box-shadow: ${theme.boxShadow.elevation1};
					&:hover {
						background-color: ${surfaceTone2};
						box-shadow: ${theme.boxShadow.elevation2};
					}
					&:disabled {
						box-shadow: none;
					}
				`;

		default:
			const tonalBgColor = `${color}Container` as ContainerColorType;
			return `
					background-color: ${theme.color[tonalBgColor]};
					&:hover {
						box-shadow: ${theme.boxShadow.elevation1};
					}
					&:disabled {
						box-shadow: none;
					}
				`;
	}
});

const bgDisabledColor = css(({ theme }) => setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled));

export const StyledButton = styled.button.attrs<StyledButtonProps>(({ disabled }) => ({
	disabled: disabled || false,
}))<StyledButtonProps>`
	border: none;
	background-color: transparent;
	border-radius: 100rem;
	overflow: hidden;
	/* & * {
		pointer-events: none;
	} */
	& .contentLayer {
		padding: 0.625rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	&:disabled {
		background-color: ${bgDisabledColor};
	}
	// variant specific css.
	${buttonVariantCSS}
`;
