// IMPORTS
// 3rd party packages
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { State, stateKeys } from "../../../styles/interactionStates";

// TYPES
export interface ContentLayerProps extends React.PropsWithChildren, React.ComponentPropsWithRef<"div"> {
	state: State;
}

// STYLES
export const StyledContentLayer = styled.div.attrs<ContentLayerProps>(() => ({
	"data-md3role": "contentLayer",
}))<ContentLayerProps>(
	({ theme, state }) => css`
		position: relative; // not absolute because when it's out of document flow, card doesnt have any size. Card size is determined by children therefor contentlayer must be relative.
		z-index: 3;
		opacity: ${state === "disabled" ? theme.stateOpacity.content.disabled : 1};
		display: flex;
		justify-content: center;
		align-content: center;
	`
);

// COMPONENT DEFINITION
const ContentLayer = ({ children = "", state = "enabled" }: ContentLayerProps) => {
	return <StyledContentLayer state={state}>{children}</StyledContentLayer>;
};

// PROPTYPES
ContentLayer.propTypes = {
	children: PropTypes.element,
	state: PropTypes.oneOf(stateKeys),
};

// EXPORTS
export default ContentLayer;
