import styled, { css } from "styled-components";

import { ContentColorType } from "../Typography";

export type IconVariantType = "filled" | "outlined";

export interface StyledIconProps {
	color?: ContentColorType;
	variant?: IconVariantType;
	sizeInRems?: number;
}

export const StyledIcon = styled.span.attrs<StyledIconProps>(({ variant }) => ({
	className: variant === "filled" ? "material-icons" : "material-icons-outlined",
}))<StyledIconProps>(
	({ theme, color, sizeInRems }) => css`
		color: ${theme.color[color!]};
		font-size: ${sizeInRems}rem;
	`
);
