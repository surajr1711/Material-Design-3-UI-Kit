import styled, { css } from "styled-components";
import { Elevation } from "../../styles/elevation";
import { fabColors } from "../FAB/Fab.styles";
import { ExtFabLayout, ExtendedFabProps } from "./ExtendedFab.types";

export const extFabLayout: ExtFabLayout = {
	height: 3.5,
	width: "auto",
	shapeFamily: "rounded",
	shapeScale: "large",
	iconSizeInRems: 1.5,
};

interface StyledExtendedFabProps extends Omit<ExtendedFabProps, "icon" | "label"> {
	elevation: Elevation;
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

export const ExtendedFabContent = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
