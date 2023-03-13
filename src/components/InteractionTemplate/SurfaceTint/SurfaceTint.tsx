// IMPORTS
// 3rd party packages
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Elevation, elevationKeys } from "../../../styles/elevation";

// TYPES
export interface SurfaceTintProps extends React.ComponentPropsWithRef<"div"> {
	elevation: Elevation;
	render?: boolean; // sometimes some components don't need a surfaceTint. Example: FAB uses surfaceTint only when the color variant is 'surface'. Plus FABs never go to elevation level0 so surfaceTint opacity cannot be set to 0. In such cases, it is better not to render the surfacetint component.
}

// STYLES
// Surfaces at elevation levels +1 to +5 are tinted via color overlays based on the primary color
// SOURCE: https://m3.material.io/styles/color/the-color-system/color-roles#c0cdc1ba-7e67-4d6a-b294-218f659ff648
export const StyledSurfaceTint = styled.div.attrs<SurfaceTintProps>(() => ({
	"data-md3role": "surfaceTint",
}))<SurfaceTintProps>(
	({ theme, elevation }) => css`
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
		background-color: ${theme.color.primary};
		opacity: ${theme.elevation.surfaceTintOpacity[elevation!]};
		pointer-events: none;
	`
);

// COMPONENT DEFINITION
const SurfaceTint = React.forwardRef<HTMLDivElement, SurfaceTintProps>(
	({ elevation = "level0", render = true, ...restProps }, ref) => {
		if (!render) return null;
		return <StyledSurfaceTint ref={ref} elevation={elevation} {...restProps} />;
	}
);

// PROPTYPES
SurfaceTint.propTypes = {
	elevation: PropTypes.oneOf(elevationKeys).isRequired,
	render: PropTypes.bool,
};

// EXPORTS
export default SurfaceTint;
