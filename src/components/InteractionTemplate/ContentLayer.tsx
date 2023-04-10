import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { State, stateKeys } from "../../styles/interactionStates";

// TYPES
export interface CLProps {
	children?: React.ReactNode;
	state: State;
	render?: boolean;
}
export interface ContentLayerProps extends CLProps, React.ComponentPropsWithRef<"div"> {}

// STYLES
export const StyledContentLayer = styled.div.attrs<ContentLayerProps>(() => ({
	"data-md3role": "contentLayer",
}))<ContentLayerProps>(
	({ theme, state }) => css`
		position: relative; // not absolute because when it's out of document flow, card doesnt have any size. Example: Card size is determined by children therefor contentlayer must be relative.
		z-index: 3;
		opacity: ${state === "disabled" ? theme.stateOpacity.content.disabled : 1};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	`
);

// COMPONENT DEFINITION
const ContentLayer = ({ children = <div />, state = "enabled", render = true }: ContentLayerProps) => {
	if (!render) return null;
	return <StyledContentLayer state={state}>{children}</StyledContentLayer>;
};

// PROPTYPES
ContentLayer.propTypes = {
	children: PropTypes.element,
	state: PropTypes.oneOf(stateKeys),
};

export default ContentLayer;
