import styled, { css } from "styled-components";
import { StyledSegButtonProps } from "./SegButton.types";

export const StyledSegButton = styled.div<StyledSegButtonProps>(
	({ theme, densityInRems }) => css`
		display: inline-block;
		height: ${densityInRems}rem;
		position: relative;
		border: 1px solid ${theme.color.outline};

		/* State Layer */
		[data-md3role="stateLayer"] {
			position: absolute;
			pointer-events: none;
			width: 100%;
			height: 100%;
			background-color: ${theme.color.onSecondaryContainer};
			opacity: ${theme.stateOpacity.stateLayer.enabled};
		}

		/* STATES */
		&:hover [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}
		&:active [data-md3role="stateLayer"] {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}

		/* remove the radio circle and checkbox square */
		input {
			appearance: none;
			/* remove input from flow of content */
			position: absolute;
		}
		label {
			display: inline-block;
			height: 100%;
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
