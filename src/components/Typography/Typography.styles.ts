import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export type ContentColorType =
	| "onPrimary"
	| "onPrimaryContainer"
	| "onSecondary"
	| "onSecondaryContainer"
	| "onTertiary"
	| "onTertiaryContainer"
	| "onError"
	| "onErrorContainer"
	| "onBackground"
	| "onSurface"
	| "onSurfaceVariant"
	| "primary"
	| "secondary"
	| "tertiary"
	| "error";

export type TypographyType =
	| "displayLarge"
	| "displayMedium"
	| "displaySmall"
	| "headlineLarge"
	| "headlineMedium"
	| "headlineSmall"
	| "titleLarge"
	| "titleMedium"
	| "titleSmall"
	| "labelLarge"
	| "labelMedium"
	| "labelSmall"
	| "bodyLarge"
	| "bodyMedium"
	| "bodySmall";

export interface StyledTypographyProps {
	type?: TypographyType;
	color?: ContentColorType;
	disabled?: boolean;
}

export const StyledTypography = styled.p<StyledTypographyProps>(
	({ type, color, disabled, theme }) => css`
		font-size: ${theme.typography[type!].fontSize}rem;
		font-weight: ${theme.typography[type!].fontWeight};
		line-height: ${theme.typography[type!].lineHeight}rem;
		letter-spacing: ${theme.typography[type!].letterSpacing}rem;
		color: ${disabled
			? setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.content.disabled)
			: theme.color[color!]};
	`
);

// defaultprops not required since they are always passed by Typography.tsx???
StyledTypography.defaultProps = {
	type: "bodyLarge",
	color: "onBackground",
	disabled: false,
};
