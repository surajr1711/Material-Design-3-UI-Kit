import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

export const StyledText = styled.span<TextProps>(
	({ theme, typescale, color }) => css`
		font-family: ${theme.typescale[typescale!].fontFamily}, sans-serif;
		font-size: ${theme.typescale[typescale!].fontSize}rem;
		font-weight: ${theme.typescale[typescale!].fontWeight};
		line-height: ${theme.typescale[typescale!].lineHeight}rem;
		letter-spacing: ${theme.typescale[typescale!].letterSpacing}rem;
		color: ${theme.color[color!]};
	`
);
