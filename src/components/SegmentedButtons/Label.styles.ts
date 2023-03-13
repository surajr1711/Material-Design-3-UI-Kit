import styled, { css } from "styled-components";

export const StyledLabel = styled.label(
	({ theme }) => css`
		height: 100%;
		overflow: hidden;
		/* 	for labelbefore */
		position: relative;
		[data-md3role="contentLayer"] {
			/* to bring input and span in front of labelbefore */
			position: relative;
			height: 100%;
			top: 0;
			/* layout */
			display: flex;
			padding-inline: 1rem;
			align-items: center;
			justify-content: center;
			/* gap between icon and text. only when theres both icon and text */
			&:has(span + span) {
				gap: 0.5rem;
			}
		}
		/* set the contentColor for text and icon. not required since already passed to typorgaphy component as default */
		span {
			color: ${theme.color.onSurface};
			white-space: nowrap;
		}
		/* does not allow selection of items inside label; ex: span and icon. Luckily it doesn't affect the input. Input can still be selected. */
		* {
			pointer-events: none;
		}
		/* set borders for all labels top bottom and left;seperators. */
		border-block: 1px solid ${theme.color.outline};
		border-left: 1px solid ${theme.color.outline};
		/* add seperator between buttons. apply border-left all buttons */
		&:last-child {
			border-right: 1px solid ${theme.color.outline};
		}
		/* set curve shape */
		&:first-child {
			border-radius: 5rem 0 0 5rem;
		}
		&:last-child {
			border-radius: 0 5rem 5rem 0;
		}

		/* state layer */
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: ${theme.color.onSecondaryContainer};
			opacity: ${theme.stateOpacity.stateLayer.enabled};
		}

		&:hover::before {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}

		/* remove the radio circle and checkbox square */
		input {
			appearance: none;
			/* remove input from flow of content */
			position: absolute;
		}

		/* style label if the contained input is checked */
		&:has(input:checked) {
			background-color: ${theme.color.secondaryContainer};
			span {
				color: ${theme.color.onSecondaryContainer};
			}
		}
	`
);
