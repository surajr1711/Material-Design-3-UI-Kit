import { css } from "styled-components";
import TintLayer from "./TintLayer";
import StateLayer from "./StateLayer";
import ContentLayer from "./ContentLayer";

export const interactionLayersCSS = css(
	({ theme }) => `
		// TINT LAYER
		&:disabled ${TintLayer} {
				opacity: ${theme.stateOpacity.surfaceTint.disabled};
		}

		// STATE LAYER
		&:hover ${StateLayer} {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}
		&:focus-visible ${StateLayer} {
			opacity: ${theme.stateOpacity.stateLayer.focus};
		}
		&:active ${StateLayer} {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}
		&:disabled ${StateLayer} {
				opacity: ${theme.stateOpacity.stateLayer.disabled};
		}

		// CONTENT LAYER
		&:disabled ${ContentLayer} {
				opacity: ${theme.stateOpacity.content.disabled};
		}
	`
);

// export default interactionLayersCSS
// DISABLED
// use disabled prop if disabled attirbute is not native

// DRAG (USE CUSTOM ATTRIBUTE AND JS)

// SELECTED AND OTHER FUNCTIONAL STATES (USE AVAILABLE PSEUDO ELEMENTS)
