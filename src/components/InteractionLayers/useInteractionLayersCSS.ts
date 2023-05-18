import { css } from "styled-components";
import TintLayer from "./TintLayer";
import StateLayer from "./StateLayer";
import ContentLayer from "./ContentLayer";

export const useInteractionLayersCSS = (disabled?: boolean) => {
	return css(
		({ theme }) => `
		// TINT LAYER
		&:disabled > ${TintLayer} {
				opacity: ${theme.stateOpacity.surfaceTint.disabled};
		}

		// STATE LAYER
		&:hover > ${StateLayer} {
			opacity: ${theme.stateOpacity.stateLayer.hover};
		}
		&:focus-visible > ${StateLayer} {
			opacity: ${theme.stateOpacity.stateLayer.focus};
		}
		&:active > ${StateLayer} {
			opacity: ${theme.stateOpacity.stateLayer.pressed};
		}
		&[data-dragging='dragStarted'] {
			opacity: ${theme.stateOpacity.stateLayer.dragged};
		}
		&:disabled > ${StateLayer} {
				opacity: ${theme.stateOpacity.stateLayer.disabled};
		}

		// CONTENT LAYER
		&:disabled > ${ContentLayer} {
			opacity: ${theme.stateOpacity.content.disabled};
		}

		// Used if :disabled is not a native attribute on the component. Such needs need to pass a disabled argument.
		${
			disabled &&
			`
				& > ${TintLayer} {
					opacity: ${theme.stateOpacity.surfaceTint.disabled};
				}
				& > ${StateLayer} {
					opacity: ${theme.stateOpacity.stateLayer.disabled};
			}
				& > ${ContentLayer} {
					opacity: ${theme.stateOpacity.content.disabled};
				}
			`
		}
		`
	);
};

// SELECTED AND OTHER FUNCTIONAL STATES (USE AVAILABLE PSEUDO ELEMENTS)
