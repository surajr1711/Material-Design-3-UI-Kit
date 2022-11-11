import styled, { css } from "styled-components";

export type BadgeType = "small" | "large" | "largeMax";

export interface StyledBadgeProps {
	badgeType: BadgeType;
}

const badgeTypeCSS = css<StyledBadgeProps>(({ badgeType }) => {
	switch (badgeType) {
		case "large":
			return `
				height: 1rem;
				width: 1rem;
			`;
		case "largeMax":
			return `
				height: 1rem;
				padding-inline: 0.2rem;
			`;
		default:
			return `
				height: 0.375rem;
				width: 0.375rem;
			`;
	}
});

export const StyledBadge = styled.div<StyledBadgeProps>(
	({ theme }) => css`
		background-color: ${theme.color.error};
		display: grid;
		align-items: center;
		justify-content: center;
		border-radius: 2rem;

		${badgeTypeCSS}
	`
);
