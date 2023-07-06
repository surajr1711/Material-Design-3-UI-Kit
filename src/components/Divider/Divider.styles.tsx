import styled, { css } from "styled-components";
import { DividerProps } from "./Divider.types";

export interface StyledDividerProps
	extends Required<Pick<DividerProps, "width">>,
		Partial<Omit<DividerProps, "width">> {}

export const HorizontalDivider = styled.hr<StyledDividerProps>(({ theme, width = "inset" }) => {
	return css`
		background-color: ${theme.color.outlineVariant};
		height: 1px;
		margin-inline: ${width === "inset" ? "1rem" : "unset"};
	`;
});

export const VerticalDivider = styled.hr<StyledDividerProps>(({ theme, width = "inset" }) => {
	return css`
		background-color: ${theme.color.outlineVariant};
		width: 1px;
		align-self: stretch;
		margin-block: ${width === "inset" ? "1rem" : "unset"};
	`;
});
