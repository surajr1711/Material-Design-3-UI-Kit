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

const buttonVariantCSS = css<StyledButtonProps>(({ theme, color, variant, disabled }) => {
	const bgDisabledColor = setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled);

	switch (variant) {
		case "filled":
			return `
					background-color: ${disabled ? bgDisabledColor : theme.color[color!]};
					&:hover {
						box-shadow: ${disabled ? "none" : theme.boxShadow.elevation1};
					}
				`;

		case "outlined":
			const outlineDisabledColor = setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled);
			return `
					background-color: ${disabled ? bgDisabledColor : "transparent"};
					border: 1px solid
						${disabled ? outlineDisabledColor : theme.color.outline};
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
					background-color: ${disabled ? bgDisabledColor : surfaceTone1};
					box-shadow: ${disabled ? "none" : theme.boxShadow.elevation1};
					&:hover {
						background-color: ${disabled ? bgDisabledColor : surfaceTone2};
						box-shadow: ${disabled ? "none" : theme.boxShadow.elevation2};
					}
				`;

		default:
			const tonalBgColor = `${color}Container` as ContainerColorType;
			return `
					background-color: ${disabled ? bgDisabledColor : theme.color[tonalBgColor]};
					&:hover {
						box-shadow: ${disabled ? "none" : theme.boxShadow.elevation1};
					}
				`;
	}
});

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
		${buttonVariantCSS}
	`
);

// StyledButton.defaultProps = {
// 	color: "primary",
// 	variant: "filled",
// 	disabled: false,
// };
