import styled, { css } from "styled-components";

export const CircularIndicator = styled.div(
	({ theme }) => css`
		svg {
			stroke: ${theme.color.primary};
		}
	`
);
