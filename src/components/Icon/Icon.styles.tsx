import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

import { ContentColorType } from "../Typography";

export interface StyledIconProps {
	color?: ContentColorType;
	variant?: "filled" | "outlined";
	sizeInRems?: number;
	disabled?: boolean;
}

const iconCSS = css<StyledIconProps>(
	({ theme, color, sizeInRems, disabled }) => `
	color: ${disabled ? setAlphaOnHex(theme.color[color!], theme.stateOpacity.content.disabled) : theme.color[color!]};
	font-size: ${sizeInRems}rem;
	`
);

export const StyledIcon = styled.span.attrs<StyledIconProps>(({ variant }) => ({
	className: variant === "filled" ? "material-icons" : "material-icons-outlined",
}))<StyledIconProps>`
	${iconCSS}
`;

// StyledIcon.defaultProps = {
// 	color: 'primary'
// }
