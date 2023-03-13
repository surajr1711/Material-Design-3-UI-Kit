// IMPORTS
// 3rd party packages
import styled, { css } from "styled-components";
// Types
import { TypeProps } from "./Type.types";

// COMPONENT DEFINITION
export const StyledType = styled.p<TypeProps>(
	({ theme, typescale, color }) => css`
		font-family: ${theme.typescale[typescale!].fontFamily}, sans-serif;
		font-size: ${theme.typescale[typescale!].fontSize}rem;
		font-weight: ${theme.typescale[typescale!].fontWeight};
		line-height: ${theme.typescale[typescale!].lineHeight}rem;
		letter-spacing: ${theme.typescale[typescale!].letterSpacing}rem;
		color: ${theme.color[color!]};
	`
);
