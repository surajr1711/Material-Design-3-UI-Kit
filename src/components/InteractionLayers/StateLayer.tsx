import React from "react";
import PropType from "prop-types";
import styled, { css } from "styled-components";
import { Color, colorKeys, onColorKeys } from "../../styles/colors";

// TYPES
// export const stateLayerColors = ["primary", "error", ...onColorKeys] as const;
// export type StateLayerColor = typeof stateLayerColors[number];
export interface StateLayerProps extends React.ComponentPropsWithRef<"div"> {
	// stateLayerColor: StateLayerColor;
	stateLayerColor: Color;
}

// STYLES
// StateLayer colors are the 'on' colors ie the same color which will be used for content.
// https://m3.material.io/foundations/interaction-states#7eed0898-8a04-44fa-8878-48833d8e017c
export const StateLayer = styled.div.attrs<StateLayerProps>(() => ({
	"data-layer": "stateLayer",
}))<StateLayerProps>(
	({ theme, stateLayerColor = "onPrimary" }) => css`
		position: absolute;
		inset: 0;
		z-index: 2;
		background-color: ${theme.color[stateLayerColor!]};
		opacity: ${theme.stateOpacity.stateLayer.enabled};
		pointer-events: none;
		transition: all ${theme.motion.duration.short1} ${theme.motion.easing.emphasized};
	`
);

// PROPTYPES
StateLayer.propTypes = {
	// stateLayerColor: PropType.oneOf(stateLayerColors).isRequired,
	stateLayerColor: PropType.oneOf(colorKeys).isRequired,
};

export default StateLayer;
