import styled, { css } from "styled-components";

import { ContentColorType } from "../Typography";

export interface StyledIconProps {
	color?: ContentColorType;
	variant?: "filled" | "outlined";
	size?: 1.25 | 1.5 | 2.5 | 3;
}

const iconCSS = css<StyledIconProps>(
	({ theme, color, size }) => `
	color: ${theme.color[color!]};
	font-size: ${size}rem;
`
);

export const StyledIcon = styled.span.attrs<StyledIconProps>(({ variant }) => ({
	className: variant === "outlined" ? "material-icons-outlined" : "material-icons",
}))<StyledIconProps>`
	${iconCSS}
`;

// StyledIcon.defaultProps = {
// 	color: 'primary'
// }
