import styled, { css } from "styled-components";
import {
	FabColor,
	FabElevation,
	FabState,
	FabProps,
	FabSize,
	FabLayout,
	FabContainerColor,
	FabContentColor,
} from "./Fab.types";

// FAB LAYOUTS
export const fabLayouts: { [T in FabSize]: FabLayout } = {
	fab: {
		height: 3.5,
		width: 3.5,
		shapeFamily: "rounded",
		shapeScale: "large",
		iconSizeInRems: 1.5,
	},
	smallFab: {
		height: 2.5,
		width: 2.5,
		shapeFamily: "rounded",
		shapeScale: "medium",
		iconSizeInRems: 1.5,
	},
	largeFab: {
		height: 6.5,
		width: 6.5,
		shapeFamily: "rounded",
		shapeScale: "extraLarge",
		iconSizeInRems: 2.25,
	},
};

export const fabColors: {
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

// FAB STATE ELEVATIONS MAP
export const fabStateElevations: { [S in FabState]: FabElevation } = {
	enabled: "level3",
	hover: "level4",
	focus: "level3",
	pressed: "level3",
};

interface StyledFabProps extends FabProps {
	elevation: FabElevation;
}

export const StyledFab = styled.button.attrs<StyledFabProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledFabProps>(({ theme, size, color, elevation }) => {
	return css`
		height: ${fabLayouts[size!].height}rem;
		width: ${fabLayouts[size!].width}rem;
		border-radius: ${theme.shape.rounded[fabLayouts[size!].shapeScale]};
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
