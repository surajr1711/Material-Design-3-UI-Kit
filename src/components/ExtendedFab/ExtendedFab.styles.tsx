import styled, { css } from "styled-components";
import { fabColors, fabStateElevations } from "../Fab/Fab.styles";
import { ExtFabLayout, ExtendedFabProps } from "./ExtendedFab.types";
import { useInteractionLayersCSS } from "../InteractionLayers";

export const extFabLayout: ExtFabLayout = {
	height: 3.5,
	width: "auto",
	shapeFamily: "rounded",
	shapeScale: "large",
	iconSizeInRems: 1.5,
};

// interface StyledExtendedFabProps extends Omit<ExtendedFabProps, "icon" | "label"> {
// 	elevation: Elevation;
// }
interface StyledExtendedFabProps extends Pick<ExtendedFabProps, "tooltip" | "width" | "color"> {}

export const StyledExtendedFab = styled.button.attrs<StyledExtendedFabProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledExtendedFabProps>(({ theme, color, width }) => {
	return css`
		height: ${extFabLayout.height}rem;
		width: ${width === "fluid" ? "100%" : extFabLayout.width};
		padding-inline: 1rem;
		border-radius: ${theme.shape.rounded[extFabLayout.shapeScale]};
		border: none;
		background-color: ${theme.color[fabColors[color!].container]};
		overflow: hidden;
		position: relative;
		isolation: isolate;
		box-shadow: ${theme.elevation.boxShadow[fabStateElevations.enabled]};
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};
		* {
			pointer-events: none;
		}

		// STATES
		&:hover {
			box-shadow: ${theme.elevation.boxShadow[fabStateElevations.hover]};
		}
		&:focus-visible {
			box-shadow: ${theme.elevation.boxShadow[fabStateElevations.focus]};
		}
		&:active {
			box-shadow: ${theme.elevation.boxShadow[fabStateElevations.pressed]};
		}

		// TINT, STATE, CONTENT LAYERS STATES
		${useInteractionLayersCSS()}
	`;
});
