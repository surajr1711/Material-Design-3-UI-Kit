import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Elevation, elevationKeys } from "../../styles/elevation";

// TYPES
export interface TintLayerProps extends React.ComponentPropsWithRef<"div"> {
	elevation: Elevation;
}

// STYLES
// Surfaces at elevation levels +1 to +5 are tinted via color overlays based on the primary color
// SOURCE: https://m3.material.io/styles/color/the-color-system/color-roles#c0cdc1ba-7e67-4d6a-b294-218f659ff648
export const TintLayer = styled.div.attrs<TintLayerProps>(() => ({
	"data-layer": "tintLayer",
}))<TintLayerProps>(
	({ theme, elevation = "level0" }) => css`
		position: absolute;
		inset: 0;
		z-index: 1;
		background-color: ${theme.color.primary};
		opacity: ${theme.elevation.surfaceTintOpacity[elevation!]};
		pointer-events: none;
	`
);

// PROPTYPES
TintLayer.propTypes = {
	elevation: PropTypes.oneOf(elevationKeys).isRequired,
};

export default TintLayer;
