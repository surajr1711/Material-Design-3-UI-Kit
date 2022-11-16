import styled, { css } from "styled-components";
// import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

import { ContentColorType } from "../Typography";

export type IconVariantType = "filled" | "outlined";

export interface StyledIconProps {
	color?: ContentColorType;
	variant?: IconVariantType;
	sizeInRems?: number;
	disabled?: boolean;
}

const iconCSS = css<StyledIconProps>(
	({ theme, color, sizeInRems, disabled }) => `
	color: ${disabled ? theme.color.onSurface : theme.color[color!]};
	opacity: ${disabled ? theme.stateOpacity.content.disabled : 1};
	font-size: ${sizeInRems}rem;
	`
);
// color: ${disabled ? setAlphaOnHex(theme.color[color!], theme.stateOpacity.content.disabled) : theme.color[color!]};

export const StyledIcon = styled.span.attrs<StyledIconProps>(({ variant }) => ({
	className: variant === "filled" ? "material-icons" : "material-icons-outlined",
}))<StyledIconProps>`
	${iconCSS}
`;

// StyledIcon.defaultProps = {
// 	color: 'primary'
// }
