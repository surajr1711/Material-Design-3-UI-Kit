import styled, { css } from "styled-components";
import { StyledFab } from "../FAB/Fab.styles";
import {
	ExtendedFabProps,
	ExtFabLayout,
	FabColor,
	FabContainerColor,
	FabContentColor,
	FabElevation,
} from "../FAB/Fab.types";

export const extFabLayout: ExtFabLayout = {
	height: 3.5,
	width: "auto",
	shapeFamily: "rounded",
	shapeScale: "large",
	iconSizeInRems: 1.5,
};

export const extFabColors: {
	[T in FabColor]: {
		container: FabContainerColor;
		content: FabContentColor;
	};
} = {
	primary: {
		container: "primaryContainer",
		content: "onPrimaryContainer",
	},
	surface: {
		container: "surface",
		content: "primary",
	},
	secondary: {
		container: "secondaryContainer",
		content: "onSecondaryContainer",
	},
	tertiary: {
		container: "tertiaryContainer",
		content: "onTertiaryContainer",
	},
};

interface StyledExtendedFabProps extends ExtendedFabProps {
	elevation: FabElevation;
}

export const StyledExtendedFab = styled.button.attrs<StyledExtendedFabProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledExtendedFabProps>(({ theme, color, elevation }) => {
	return css`
		height: ${extFabLayout.height}rem;
		width: ${extFabLayout.width};
		padding-inline: 1rem;
		border-radius: ${theme.shape.rounded[extFabLayout.shapeScale]};
		border: none;
		background-color: ${theme.color[extFabColors[color!].container]};
		overflow: hidden;
		position: relative;
		box-shadow: ${theme.elevation.boxShadow[elevation!]};
		* {
			pointer-events: none;
		}
	`;
});
