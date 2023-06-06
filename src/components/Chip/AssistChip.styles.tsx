import styled, { css } from "styled-components";
import { Color } from "../../styles/colors";
import { AssistChipProps, ChipElevation } from "./Chip.types";
import { useInteractionLayersCSS } from "../InteractionLayers";
import { State } from "../../styles/interactionStates";
import { Elevation } from "../../styles/elevation";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

export const chipLayout = {
	height: 2, // Rems, 32px
	shapeFamily: "rounded",
	shapeScale: "small",
	labelSize: "labelLarge",
	iconSize: 1.125, // Rems, 18px
	avatarSize: 1.5, // Rems, 24px
	paddingInline: 1, // Rems, 16px
	paddingInlineWithIcon: 0.5, // Rems, 8px
	gap: 0.5, // Rems, 8px
} as const;

export type AssistChipColors = {
	container: { [E in ChipElevation]: Color };
	icon: { [S in Extract<State, "enabled" | "disabled">]: Color };
	label: Color;
	stateLayer: Color;
	outline: Color;
};

// For boxshadow
export const assistChipStateElevations: { [T in ChipElevation]: { [S in State]: Elevation } } = {
	level0: {
		enabled: "level0",
		hover: "level0",
		focus: "level0",
		pressed: "level0",
		dragged: "level4",
		disabled: "level0",
	},
	level1: {
		enabled: "level1",
		hover: "level2",
		focus: "level1",
		pressed: "level1",
		dragged: "level4",
		disabled: "level0",
	},
};

export const assistChipColors: AssistChipColors = {
	container: {
		level0: "none",
		level1: "surface",
	},
	icon: {
		enabled: "primary",
		disabled: "onSurface",
	},
	label: "onSurface",
	stateLayer: "onSurface",
	outline: "outline",
};

export const AssistChipContentWrapper = styled.div`
	display: flex;
	gap: ${chipLayout.gap}rem;
`;

export const StyledAssistChip = styled.button<AssistChipProps>(
	({ theme, elevation, iconName, iconPosition, loading }) => css`
		height: ${chipLayout.height}rem;
		padding-inline: ${!iconName ? chipLayout.paddingInline : chipLayout.paddingInlineWithIcon}rem;

		border-radius: ${theme.shape[chipLayout.shapeFamily][chipLayout.shapeScale]};
		border: ${elevation === "level0" ? `1px solid ${theme.color.outline}` : "none"};

		background-color: ${theme.color[assistChipColors.container[elevation!]]};

		overflow: hidden;
		position: relative;
		isolation: isolate;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		// Chip position leading or trailing
		& ${AssistChipContentWrapper} {
			flex-direction: ${iconPosition === "leading" ? "row" : "row-reverse"};
		}

		// Box shadow based on chipstate elevation
		box-shadow: ${theme.elevation.boxShadow[assistChipStateElevations[elevation!].enabled]};
		&:hover {
			box-shadow: ${theme.elevation.boxShadow[assistChipStateElevations[elevation!].hover]};
		}
		&:focus-visible {
			box-shadow: ${theme.elevation.boxShadow[assistChipStateElevations[elevation!].focus]};
		}
		&:active {
			box-shadow: ${theme.elevation.boxShadow[assistChipStateElevations[elevation!].pressed]};
		}
		&[data-dragging="dragStarted"] {
			box-shadow: ${theme.elevation.boxShadow[assistChipStateElevations[elevation!].dragged]};
		}

		&:disabled {
			box-shadow: ${theme.elevation.boxShadow[assistChipStateElevations[elevation!].disabled]};
			${elevation === "level0"
				? css`
						border-color: ${setAlphaOnHex(theme.color[assistChipColors.outline], 0.12)};
				  `
				: css`
						background-color: ${setAlphaOnHex(theme.color.onSurface, 0.12)};
				  `};
		}

		${useInteractionLayersCSS()}
	`
);

// const suggestionChipColors: Omit<AssistChipColors, "icon"> = {
// 	container: { level0: "none", level1: "surface" },
// 	label: "onSurfaceVariant",
// 	outline: "outline",
// };

// export const StyledFilterChip = styled.input.attrs({
// 	type: "checkbox",
// })``;
