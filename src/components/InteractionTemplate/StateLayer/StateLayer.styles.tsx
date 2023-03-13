import styled, { css } from "styled-components";
import { StateLayerProps } from "./StateLayer.types";

// StateLayer colors are the 'on' colors ie the same color which will be used for content.
// https://m3.material.io/foundations/interaction-states#7eed0898-8a04-44fa-8878-48833d8e017c
export const StyledStateLayer = styled.div.attrs<StateLayerProps>(() => ({
	"data-md3role": "stateLayer",
}))<StateLayerProps>(
	({ theme, stateLayerColor, state }) => css`
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 2;
		background-color: ${theme.color[stateLayerColor!]};
		opacity: ${theme.stateOpacity.stateLayer[state!]};
		pointer-events: none;
		transition: all ${theme.motion.duration.medium1} ${theme.motion.easing.emphasized};

		/* // click animation circle
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			background-color: ${theme.color[stateLayerColor!]};
			opacity: 0;
			transform-origin: center;
		}
		@keyframes clickAnimation {
			from {
				transform: scale(0);
			}
			to {
				transform: scale(10);
			}
		}

		${state === "pressed" &&
		css`
			background-color: transparent;
			opacity: 1;
			&:after {
				opacity: ${theme.stateOpacity.stateLayer.pressed};
				animation-name: clickAnimation;
				animation-duration: ${theme.motion.duration.medium4};
				animation-timing-function: ${theme.motion.easing.emphasized};
				animation-fill-mode: none;
			}
		`} */
	`
);
