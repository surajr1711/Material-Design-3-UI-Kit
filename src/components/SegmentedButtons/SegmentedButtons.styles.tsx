import styled, { css } from "styled-components";

interface StyledSegmentedButtonsProps {
	optionsNum: number;
}

export const StyledSegmentedButtons = styled.fieldset<StyledSegmentedButtonsProps>(
	({ theme }) => css`
		display: inline-grid;
		grid-template-columns: repeat(3, minmax(3rem, 1fr));
		border: none;
		padding: 0;
		overflow: hidden;
		label {
			display: flex;
			height: 2.5rem;
			padding-inline: 1rem;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			/* 	for labelbefore */
			position: relative;
		}
		/* does not allow selection of items inside label; ex: span and icon. Luckily it doesn't affect the input. Input can still be selected. */
		label * {
			pointer-events: none;
		}

		/* set borders for all labels top bottom and left;seperators. */
		label {
			border-block: 1px solid black;
			border-left: 1px solid black;
		}
		/* add seperator between buttons. apply border-left all buttons */
		label:last-child {
			border-right: 1px solid black;
		}
		/* set curve shape */
		label:first-child {
			border-radius: 5rem 0 0 5rem;
		}
		label:last-child {
			border-radius: 0 5rem 5rem 0;
		}

		/* state layer */
		label::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: black;
			opacity: 0;
		}

		label:hover::before {
			opacity: 0.1;
		}

		/* to bring input and span in front of labelbefore */
		input,
		span {
			position: relative;
		}

		input {
			appearance: none;
		}

		/* style label if the contained input is checked */
		label:has(input:checked) {
			background-color: lightgreen;
		}
	`
);
