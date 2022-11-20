import styled, { css } from "styled-components";
import { ColorType, OnContainerColorType, OnColorType, OnNeutralColorType } from "../../styles/theme";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

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
	disabled?: boolean;
}

export const StyledTypography = styled.p<StyledTypographyProps>(
	({ theme, typescale, color, disabled }) => css`
		font-family: ${theme.typescale[typescale!].fontFamily}, sans-serif;
		font-size: ${theme.typescale[typescale!].fontSize}rem;
		font-weight: ${theme.typescale[typescale!].fontWeight};
		line-height: ${theme.typescale[typescale!].lineHeight}rem;
		letter-spacing: ${theme.typescale[typescale!].letterSpacing}rem;
		color: ${disabled ? setAlphaOnHex(theme.color[color!], theme.stateOpacity.content.disabled) : theme.color[color!]};
	`
);
// color: ${disabled ? setAlphaOnHex(theme.color[color!], theme.stateOpacity.content.disabled) : color==='inherit' ? 'inherit' : theme.color[color!]};

/*
// defaultprops not required since they are always passed by Typography.tsx???
StyledTypography.defaultProps = {
	type: "bodyLarge",
	color: "onBackground",
	disabled: false,
};
*/
