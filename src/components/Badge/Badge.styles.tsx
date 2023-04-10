import styled, { css } from "styled-components";
import { BadgeProps } from "./Badge.types";

export const StyledBadge = styled.div<BadgeProps>(
	({ theme }) => css`
		background-color: ${theme.color.error};
		display: grid;
		align-items: center;
		justify-content: center;
		border-radius: ${theme.shape.rounded.full};
		pointer-events: none;
	`
);

export const SmallBadge = styled(StyledBadge)`
	height: 0.375rem;
	width: 0.375rem;
`;

export const LargeBadge = styled(StyledBadge)`
	height: 1rem;
	width: 1rem;
`;

export const LargeMaxBadge = styled(StyledBadge)`
	height: 1rem;
	padding-inline: 0.2rem;
`;
