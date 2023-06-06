import styled, { css } from "styled-components";
import { InputChipProps, SelectedKeys } from "./Chip.types";
import { chipLayout } from "./AssistChip.styles";
import { Color } from "../../styles/colors";
import { useInteractionLayersCSS } from "../InteractionLayers";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";

const inputChipLayout = {
	padding: 0.75, // rem, 12px
	paddingWithIcon: 0.5, // rem, 8px
	paddingWithAvatar: 0.25, // rem, 4px
};
export type InputChipColors = {
	container: { [S in SelectedKeys]: Color };
	label: { [S in SelectedKeys]: Color };
	icon: { [S in SelectedKeys]: Color };
	deleteIcon: { [S in SelectedKeys]: Color };
	stateLayer: { [S in SelectedKeys]: Color };
	outline: { [S in SelectedKeys]: Color };
};
export const inputChipColors: InputChipColors = {
	container: {
		selected: "secondaryContainer",
		unselected: "surface",
	},
	label: {
		selected: "onSecondaryContainer",
		unselected: "onSurfaceVariant",
	},
	icon: {
		selected: "onSecondaryContainer",
		unselected: "primary",
	},
	deleteIcon: {
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

export const StyledInputChip = styled.button<InputChipProps>(
	({ theme, avatar, iconName, showDeleteIcon, selected }) => {
		const selectedKey: SelectedKeys = selected ? "selected" : "unselected";

		return css`
			height: ${chipLayout.height}rem;

			padding-inline-start: ${avatar
				? inputChipLayout.paddingWithAvatar
				: iconName
				? inputChipLayout.paddingWithIcon
				: inputChipLayout.padding}rem;
			padding-inline-end: ${showDeleteIcon ? inputChipLayout.paddingWithIcon : inputChipLayout.padding}rem;

			border-radius: ${theme.shape[chipLayout.shapeFamily][chipLayout.shapeScale]};
			border: ${selected ? "none" : `1px solid ${theme.color[inputChipColors.outline.unselected]}`};

			background-color: ${theme.color[inputChipColors.container[selectedKey]]};

			overflow: hidden;
			position: relative;
			isolation: isolate;
			transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

			&[data-dragging="dragStarted"] {
				box-shadow: ${theme.elevation.boxShadow.level4};
			}

			&:disabled {
				${selected &&
				css`
					background-color: ${setAlphaOnHex(theme.color.onSurface, 0.12)};
				`}
				border-color: ${setAlphaOnHex(theme.color.onSurface, 0.12)};
			}

			${useInteractionLayersCSS()}
		`;
	}
);
