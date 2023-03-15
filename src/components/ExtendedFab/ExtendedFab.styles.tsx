import styled, { css } from "styled-components";
import { fabColors } from "../FAB/Fab.styles";
import { FabElevation } from "../FAB/Fab.types";
import { ExtFabLayout, ExtendedFabProps } from "./ExtendedFab.types";

export const extFabLayout: ExtFabLayout = {
	height: 3.5,
	width: "auto",
	shapeFamily: "rounded",
	shapeScale: "large",
	iconSizeInRems: 1.5,
};

interface StyledExtendedFabProps extends ExtendedFabProps {
	elevation: FabElevation;
}

export const StyledExtendedFab = styled.button.attrs<StyledExtendedFabProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledExtendedFabProps>(({ theme, color, elevation, width }) => {
	return css`
		height: ${extFabLayout.height}rem;
		width: ${width === "fluid" ? "100%" : extFabLayout.width};
		padding-inline: 1rem;
		border-radius: ${theme.shape.rounded[extFabLayout.shapeScale]};
		border: none;
		background-color: ${theme.color[fabColors[color!].container]};
		overflow: hidden;
		position: relative;
		box-shadow: ${theme.elevation.boxShadow[elevation!]};
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};
		* {
			pointer-events: none;
		}
	`;
});
