import React from "react";
import PropType from "prop-types";
import styled, { css } from "styled-components";
import { BaseColor, onColorKeys, OnColor, baseColorKeys } from "../../styles/colors";
import { State } from "../../styles/interactionStates";
import { stateKeys } from "../../styles/interactionStates";

// TYPES
export const stateLayerColors = ["primary", "none", ...onColorKeys] as const;
export type StateLayerColor = typeof stateLayerColors[number];

export interface SLProps extends React.ComponentPropsWithRef<"div"> {
	stateLayerColor: StateLayerColor;
	state: State;
	render?: boolean;
}
export interface StateLayerProps extends SLProps, React.ComponentPropsWithRef<"div"> {}

// STYLES
// StateLayer colors are the 'on' colors ie the same color which will be used for content.
// https://m3.material.io/foundations/interaction-states#7eed0898-8a04-44fa-8878-48833d8e017c
export const StyledStateLayer = styled.div.attrs<StateLayerProps>(() => ({
	"data-md3role": "stateLayer",
}))<StateLayerProps>(
	({ theme, stateLayerColor, state }) => css`
		position: absolute;
		inset: 0;
		z-index: 2;
		background-color: ${theme.color[stateLayerColor!]};
		opacity: ${theme.stateOpacity.stateLayer[state!]};
		pointer-events: none;
		transition: all ${theme.motion.duration.medium1} ${theme.motion.easing.emphasized};
	`
);

// COMPONENT DEFINITION
const StateLayer = React.forwardRef<HTMLDivElement, StateLayerProps>(
	({ stateLayerColor = "onPrimary", state = "enabled", render = true, ...props }, ref) => {
		if (!render) return null;
		return <StyledStateLayer ref={ref} stateLayerColor={stateLayerColor} state={state} {...props} />;
	}
);

// PROPTYPES
StateLayer.propTypes = {
	stateLayerColor: PropType.oneOf(stateLayerColors).isRequired,
	state: PropType.oneOf(stateKeys).isRequired,
	render: PropType.bool,
};

export default StateLayer;
