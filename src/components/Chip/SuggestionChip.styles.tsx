import styled, { css } from "styled-components";
import { ChipElevation, SelectedKeys, SuggestionChipProps } from "./Chip.types";
import { chipLayout } from "./AssistChip.styles";
import { Color } from "../../styles/colors";
import { useInteractionLayersCSS } from "../InteractionLayers";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export type SuggestionChipColors = {
	container: {
		[T in ChipElevation]: {
			[S in SelectedKeys]: Color;
		};
	};
	label: { [S in SelectedKeys]: Color };
	stateLayer: { [S in SelectedKeys]: Color };
	outline: { [S in SelectedKeys]: Color };
};
export const suggestionChipColors: SuggestionChipColors = {
	container: {
		level0: {
			selected: "secondaryContainer",
			unselected: "none",
		},
		level1: {
			selected: "secondaryContainer",
			unselected: "surface",
		},
	},
	label: {
		selected: "onSecondaryContainer",
		unselected: "onSurfaceVariant",
	},
	stateLayer: {
		selected: "onSecondaryContainer",
		unselected: "onSurfaceVariant",
	},
	outline: {
		selected: "none",
		unselected: "outline",
	},
};

// For boxshadow
export const suggestionChipStateElevations: {
	[T in ChipElevation]: {
		[F in Exclude<SelectedKeys, "disabled">]: {
			[S in State]: Elevation;
		};
	};
} = {
	level0: {
		unselected: {
			enabled: "level0",
			hover: "level0",
			focus: "level0",
			pressed: "level0",
			dragged: "level4",
			disabled: "level0",
		},
		selected: {
			enabled: "level0",
			hover: "level1",
			focus: "level0",
			pressed: "level0",
			dragged: "level4",
			disabled: "level0",
		},
	},
	level1: {
		unselected: {
			enabled: "level1",
			hover: "level2",
			focus: "level1",
			pressed: "level1",
			dragged: "level4",
			disabled: "level0",
		},
		selected: {
			enabled: "level1",
			hover: "level2",
			focus: "level1",
			pressed: "level1",
			dragged: "level4",
			disabled: "level0",
		},
	},
};

export const StyledSuggestionChip = styled.button<SuggestionChipProps>(({ theme, elevation, selected }) => {
	const selectedKey: SelectedKeys = selected ? "selected" : "unselected";

	return css`
		height: ${chipLayout.height}rem;
		padding-inline: ${chipLayout.paddingInline}rem;

		border-radius: ${theme.shape[chipLayout.shapeFamily][chipLayout.shapeScale]};
		border: ${elevation === "level0" && !selected ? `1px solid ${theme.color.outline}` : "none"};

		background-color: ${theme.color[suggestionChipColors.container[elevation!][selectedKey]]};

		overflow: hidden;
		position: relative;
		isolation: isolate;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		// Box shadow based on chipstate elevation
		box-shadow: ${theme.elevation.boxShadow[suggestionChipStateElevations[elevation!][selectedKey].enabled]};
		&:hover {
			box-shadow: ${theme.elevation.boxShadow[suggestionChipStateElevations[elevation!][selectedKey].hover]};
		}
		&:focus-visible {
			box-shadow: ${theme.elevation.boxShadow[suggestionChipStateElevations[elevation!][selectedKey].focus]};
		}
		&:active {
			box-shadow: ${theme.elevation.boxShadow[suggestionChipStateElevations[elevation!][selectedKey].pressed]};
		}
		&[data-dragging="dragStarted"] {
			box-shadow: ${theme.elevation.boxShadow[suggestionChipStateElevations[elevation!][selectedKey].dragged]};
		}

		&:disabled {
			box-shadow: ${theme.elevation.boxShadow[suggestionChipStateElevations[elevation!][selectedKey].disabled]};
			${!selected && elevation === "level0"
				? css`
						border-color: ${setAlphaOnHex(theme.color.onSurface, 0.12)};
						background-color: ${theme.color.none};
				  `
				: css`
						background-color: ${setAlphaOnHex(theme.color.onSurface, 0.12)};
				  `}
		}

		${useInteractionLayersCSS()}
	`;
});
