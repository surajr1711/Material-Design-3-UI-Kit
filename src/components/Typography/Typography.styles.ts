import styled, { css } from "styled-components";
import { ColorType, OnContainerColorType, OnColorType, OnNeutralColorType } from "../../styles/theme";

export type ContentColorType = ColorType | OnColorType | OnContainerColorType | OnNeutralColorType;

export type TypescaleType =
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
	typescale?: TypescaleType;
	color?: ContentColorType;
}

export const StyledTypography = styled.p<StyledTypographyProps>(
	({ theme, typescale, color }) => css`
		font-family: ${theme.typescale[typescale!].fontFamily}, sans-serif;
		font-size: ${theme.typescale[typescale!].fontSize}rem;
		font-weight: ${theme.typescale[typescale!].fontWeight};
		line-height: ${theme.typescale[typescale!].lineHeight}rem;
		letter-spacing: ${theme.typescale[typescale!].letterSpacing}rem;
		color: ${theme.color[color!]};
	`
);
