import styled, { css } from "styled-components";
import { Color } from "../../styles/colors";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import { ShapeFamily, ShapeScale } from "../../styles/shape";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { ButtonProps, ButtonVariant } from "./Button.types";
import { interactionLayersCSS } from "../InteractionLayers";

// BUTTON LAYOUTS (size, shape, radius)
type ButtonLayout = {
	// all values in rems
	height: 2.5; // 40dp
	minWidth: number; // none
	shapeFamily: Extract<ShapeFamily, "rounded">;
	shapeScale: Extract<ShapeScale, "full">; // 20dp
	iconSize: 1.125; // 18dp
	labelTypescale: "labelLarge";
	paddingLeft: number; // 24dp
	paddingRight: number; // 24dp
	paddingLeftWithIcon: number; // 16dp
	paddingRightWithIcon: number; // 24dp
	gap: 0.5; //8dp
	contentAlignment: "center";
};
const layoutDefaults: ButtonLayout = {
	// all values in rems
	height: 2.5, // 40dp
	minWidth: 0, // none
	shapeFamily: "rounded",
	shapeScale: "full", // 20dp
	iconSize: 1.125, // 18dp
	labelTypescale: "labelLarge",
	paddingLeft: 1.5, // 24dp
	paddingRight: 1.5, // 24dp
	paddingLeftWithIcon: 1, // 16dp
	paddingRightWithIcon: 1.5, // 24dp
	gap: 0.5, //8dp
	contentAlignment: "center",
};
type LayoutType = "contained" | "text"; // contained = elevated | filled |tonal | outlined
export const buttonLayouts: {
	[T in LayoutType]: typeof layoutDefaults;
} = {
	contained: layoutDefaults,
	text: {
		...layoutDefaults,
		minWidth: 3, // 48dp
		paddingLeft: 0.75, // 12dp
		paddingRight: 0.75, // 12dp
		paddingLeftWithIcon: 0.75, // 12dp
		paddingRightWithIcon: 1, // 16dp
	},
};

// BUTTON COLORS
export const buttonColors: {
	[T in ButtonVariant]: {
		container: Color;
		content: Extract<Color, "primary" | "onPrimary" | "onSecondaryContainer">;
		disabled: "onSurface";
	};
} = {
	elevated: {
		container: "surface",
		content: "primary",
		disabled: "onSurface",
	},
	filled: {
		container: "primary",
		content: "onPrimary",
		disabled: "onSurface",
	},
	tonal: {
		container: "secondaryContainer",
		content: "onSecondaryContainer",
		disabled: "onSurface",
	},
	outlined: {
		container: "none", // or optionally 'surface'
		content: "primary",
		disabled: "onSurface",
	},
	text: {
		container: "none",
		content: "primary",
		disabled: "onSurface", // container is transparent
	},
};

// BUTTON ELEVATIONS (based on state) used for tintlayeropacity (inital elevation only ie enabled) and boxshadow
const stateElevationDefaults: { [T in State]: Elevation } = {
	enabled: "level0",
	disabled: "level0",
	hover: "level1",
	focus: "level0",
	pressed: "level0",
	dragged: "level0", // no value. Button cannot be dragged.
};
export const buttonStateElevations: {
	[T in ButtonVariant]: typeof stateElevationDefaults;
} = {
	filled: stateElevationDefaults,
	elevated: {
		...stateElevationDefaults,
		enabled: "level1",
		hover: "level2",
		focus: "level1",
		pressed: "level1",
	},
	tonal: stateElevationDefaults,
	outlined: {
		...stateElevationDefaults,
		hover: "level0",
	},
	text: {
		...stateElevationDefaults,
		hover: "level0",
	},
};

export const StyledButton = styled.button<ButtonProps>(({ theme, variant, icon }) => {
	const layoutType: LayoutType = variant === "text" ? "text" : "contained";

	return css`
		background-color: ${theme.color[buttonColors[variant!].container]};
		border: none;
		border-radius: ${theme.shape[buttonLayouts[layoutType].shapeFamily][buttonLayouts[layoutType].shapeScale]};
		position: relative;
		isolation: isolate;
		overflow: hidden;
		height: ${buttonLayouts[layoutType].height}rem;
		padding-inline-start: ${icon
			? buttonLayouts[layoutType].paddingLeftWithIcon
			: buttonLayouts[layoutType].paddingLeft}rem;
		padding-inline-end: ${icon
			? buttonLayouts[layoutType].paddingRightWithIcon
			: buttonLayouts[layoutType].paddingRight}rem;
		transition: all ${theme.motion.duration.medium1} ${theme.motion.easing.emphasized};

		box-shadow: ${theme.elevation.boxShadow[buttonStateElevations[variant!].enabled]};
		&:hover {
			box-shadow: ${theme.elevation.boxShadow[buttonStateElevations[variant!].hover]};
		}
		&:focus-visible {
			box-shadow: ${theme.elevation.boxShadow[buttonStateElevations[variant!].focus]};
		}
		&:active {
			box-shadow: ${theme.elevation.boxShadow[buttonStateElevations[variant!].pressed]};
		}
		&:disabled {
			background-color: ${setAlphaOnHex(
				theme.color[buttonColors[variant!].disabled],
				theme.stateOpacity.container.disabled
			)};
			box-shadow: ${theme.elevation.boxShadow[buttonStateElevations[variant!].disabled]};
		}

		${interactionLayersCSS}
	`;
});

export const ElevatedButton = styled(StyledButton)(({ theme }) => css``);

export const FilledButton = styled(StyledButton)(({ theme }) => css``);
export const TonalButton = styled(StyledButton)(({ theme }) => css``);
export const OutlinedButton = styled(StyledButton)(
	({ theme }) => css`
		border: 1px solid ${theme.color.outline};
		&:disabled {
			border-color: ${setAlphaOnHex(theme.color[buttonColors.outlined.disabled], theme.stateOpacity.outline.disabled)};
		}
	`
);
export const TextButton = styled(StyledButton)(
	({ theme }) => css`
		&:disabled {
			background-color: ${theme.color.none};
		}
	`
);

// OLD
// ==================================
// interface StyledButtonProps {
// 	color?: ButtonColor;
// 	variant?: ButtonVariant;
// 	stateLayerColor?: ButtonContentColor;
// }

// export const StyledButton = styled.button<StyledButtonProps>(({ theme, stateLayerColor }) => {
// 	return css`
// 		// Button Container
// 		border: none;
// 		border-radius: ${theme.shape.rounded.full};
// 		overflow: hidden;
// 		height: 2.5rem;
// 		position: relative; // allows for surfaceTone and stateLayer position absolute
// 		& * {
// 			pointer-events: none;
// 		}

// 		// State Layer
// 		[data-md3role="stateLayer"] {
// 			position: absolute;
// 			width: 100%;
// 			height: 100%;
// 			background-color: ${theme.color[stateLayerColor!]};
// 			opacity: ${theme.stateOpacity.stateLayer.enabled};
// 		}

// 		// Content Layer
// 		[data-md3role="contentLayer"] {
// 			padding: 0.625rem 1.5rem;
// 			display: flex;
// 			align-items: center;
// 			gap: 0.5rem;
// 		}

// 		// STATES
// 		&:hover [data-md3role="stateLayer"] {
// 			opacity: ${theme.stateOpacity.stateLayer.hover};
// 		}
// 		&:active [data-md3role="stateLayer"] {
// 			opacity: ${theme.stateOpacity.stateLayer.pressed};
// 		}

// 		// variant specific css. Contains state css. Must be placed before disabled css otherwise hover css overrides disabled css. Because in css even though a button is disabled, it can be hovered.

// 		&:disabled {
// 			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
// 		}
// 		&:disabled [data-md3role="stateLayer"] {
// 			opacity: ${theme.stateOpacity.stateLayer.disabled};
// 		}
// 		&:disabled [data-md3role="contentLayer"] {
// 			opacity: ${theme.stateOpacity.content.disabled};
// 		}
// 	`;
// });

// export const FilledButton = styled(StyledButton)(
// 	({ theme, color }) => css`
// 		// Button Container
// 		background-color: ${theme.color[color!]};
// 		// States
// 		&:hover {
// 			box-shadow: ${theme.elevation.boxShadow.level1};
// 		}
// 		&:disabled {
// 			box-shadow: ${theme.elevation.boxShadow.level0};
// 		}
// 	`
// );

// export const OutlinedButton = styled(StyledButton)(({ theme }) => {
// 	return css`
// 		// CSS Variables
// 		--outlineDisabledColor: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
// 		// Button Container
// 		background-color: transparent;
// 		border: 1px solid ${theme.color.outline};
// 		// States
// 		&:disabled {
// 			border: 1px solid var(--outlineDisabledColor);
// 		}
// 	`;
// });

// export const TextButton = styled(StyledButton)`
// 	// Button Container
// 	background-color: transparent;
// 	// Content layer
// 	[data-md3role="contentLayer"] {
// 		padding-inline: 0.75rem;
// 	}
// `;

// export const ElevatedButton = styled(StyledButton)(({ theme, color }) => {
// 	return css`
// 		// Button Container
// 		background-color: ${theme.color.surface};
// 		box-shadow: ${theme.elevation.boxShadow.level1};
// 		// Surface tint
// 		[data-md3role="surfaceTint"] {
// 			position: absolute;
// 			width: 100%;
// 			height: 100%;
// 			background-color: ${theme.color[color!]};
// 			opacity: ${theme.elevation.surfaceTintOpacity.level1};
// 		}
// 		//States
// 		&:hover {
// 			box-shadow: ${theme.elevation.boxShadow.level2};
// 		}
// 		&:disabled {
// 			box-shadow: ${theme.elevation.boxShadow.level0};
// 		}
// 		&:disabled [data-md3role="surfaceTint"] {
// 			opacity: ${theme.stateOpacity.surfaceTint.disabled};
// 		}
// 	`;
// });

// export const TonalButton = styled(StyledButton)(({ theme, color }) => {
// 	const tonalBgColor = `${color}Container` as ContainerColor;
// 	return css`
// 		// Button Container
// 		background-color: ${theme.color[tonalBgColor]};
// 		// States
// 		&:hover {
// 			box-shadow: ${theme.elevation.boxShadow.level1};
// 		}
// 		&:disabled {
// 			box-shadow: ${theme.elevation.boxShadow.level0};
// 		}
// 	`;
// });
