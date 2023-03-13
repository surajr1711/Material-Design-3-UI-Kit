import styled, { css } from "styled-components";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.span.attrs<IconProps>(({ variant }) => ({
	className: variant === "filled" ? "material-icons" : "material-icons-outlined",
}))<IconProps>(
	({ theme, color, sizeInRems }) => css`
		color: ${theme.color[color!]};
		font-size: ${sizeInRems}rem;
	`
);
