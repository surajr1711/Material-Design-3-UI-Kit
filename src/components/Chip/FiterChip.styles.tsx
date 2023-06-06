import styled, { css } from "styled-components";
import { Color } from "../../styles/colors";
import { ChipElevation, FilterChipProps, SelectedKeys } from "./Chip.types";
import { chipLayout } from "./AssistChip.styles";
import { State } from "../../styles/interactionStates";
import { Elevation } from "../../styles/elevation";
import { useInteractionLayersCSS } from "../InteractionLayers";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export type FilterChipColors = {
	container: {
		[T in ChipElevation]: {
			[S in SelectedKeys]: Color;
		};
	};
	label: { [S in SelectedKeys]: Color };
	icon: { [S in SelectedKeys]: Color };
	stateLayer: { [S in SelectedKeys]: Color };
	outline: { [S in SelectedKeys]: Color };
};

export const filterChipColors: FilterChipColors = {
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
	icon: {
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
export const filterChipStateElevations: {
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

// export const FilterChipContentWrapper = styled.div`
// 	display: flex;
// 	gap: ${chipLayout.gap}rem;
// `;

export const StyledFilterChip = styled.button<FilterChipProps>(({ theme, elevation, selected, iconName }) => {
	const selectedKey: Exclude<SelectedKeys, "disabled"> = selected ? "selected" : "unselected";
	const showIcon = !!iconName;

	return css`
		height: ${chipLayout.height}rem;
		padding-inline: ${selected || showIcon ? chipLayout.paddingInlineWithIcon : chipLayout.paddingInline}rem;

		border-radius: ${theme.shape[chipLayout.shapeFamily][chipLayout.shapeScale]};
		border: ${elevation === "level0" && !selected ? `1px solid ${theme.color.outline}` : "none"};

		background-color: ${theme.color[filterChipColors.container[elevation!][selectedKey]]};

		overflow: hidden;
		position: relative;
		isolation: isolate;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		// Box shadow based on chipstate elevation
		box-shadow: ${theme.elevation.boxShadow[filterChipStateElevations[elevation!][selectedKey].enabled]};
		&:hover {
			box-shadow: ${theme.elevation.boxShadow[filterChipStateElevations[elevation!][selectedKey].hover]};
		}
		&:focus-visible {
			box-shadow: ${theme.elevation.boxShadow[filterChipStateElevations[elevation!][selectedKey].focus]};
		}
		&:active {
			box-shadow: ${theme.elevation.boxShadow[filterChipStateElevations[elevation!][selectedKey].pressed]};
		}
		&[data-dragging="dragStarted"] {
			box-shadow: ${theme.elevation.boxShadow[filterChipStateElevations[elevation!][selectedKey].dragged]};
		}

		&:disabled {
			box-shadow: ${theme.elevation.boxShadow[filterChipStateElevations[elevation!][selectedKey].disabled]};
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
