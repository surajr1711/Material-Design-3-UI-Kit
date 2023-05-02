import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

// TYPES
export interface ContentLayerProps extends React.ComponentPropsWithRef<"div"> {
	children?: React.ReactNode;
}

// STYLES
export const ContentLayer = styled.div.attrs<ContentLayerProps>(() => ({
	"data-layer": "contentLayer",
}))<ContentLayerProps>(
	({ theme }) => css`
		position: relative; // not absolute because when it's out of document flow, card doesnt have any size. Example: Card size is determined by children therefor contentlayer must be relative.
		z-index: 3;
		opacity: ${theme.stateOpacity.content.enabled};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		gap: 0.5rem;
	`
);

// PROPTYPES
ContentLayer.propTypes = {
	// children: PropTypes.element, // proptypes.element forces only single child. cannot be 0 or more than 1 elements.
};

export default ContentLayer;
