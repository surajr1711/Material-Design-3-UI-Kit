import styled, { css } from "styled-components";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import { FabColor, FabProps, FabSize, FabLayout, FabContainerColor, FabContentColor } from "./Fab.types";
import { interactionLayersCSS } from "../InteractionLayers";

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

// FAB STATE ELEVATIONS
export const fabStateElevations: { [S in Exclude<State, "dragged" | "disabled">]: Elevation } = {
	enabled: "level3",
	hover: "level4",
	focus: "level3",
	pressed: "level3",
	// dragged: "level0", // Fab cannot be dragged
	// disabled: "level0", // Fab cannot be disabled
};

// interface StyledFabProps extends Omit<FabProps, "icon"> {}
interface StyledFabProps extends Pick<FabProps, "tooltip" | "size" | "color"> {}

export const StyledFab = styled.button.attrs<StyledFabProps>(({ tooltip }) => ({
	title: tooltip,
}))<StyledFabProps>(({ theme, size, color }) => {
	return css`
		height: ${fabLayouts[size!].height}rem;
		width: ${fabLayouts[size!].width}rem;
		border-radius: ${theme.shape.rounded[fabLayouts[size!].shapeScale]};
		border: none;
		background-color: ${theme.color[fabColors[color!].container]};
		overflow: hidden;
		position: relative;
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
		${interactionLayersCSS}
	`;
});
