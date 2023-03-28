import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import {
	IconButtonContainerColor,
	IconButtonContentColor,
	IconButtonProps,
	IconButtonVariant,
} from "./IconButton.types";

export const iconButtonLayout = {
	height: 2.5,
	width: 2.5,
	shapeFamily: "rounded",
	shapeScale: "full",
	iconSizeinRems: 1.5,
} as const;

export const iconButtonColors: {
	[T in IconButtonVariant]: {
		icon: {
			noToggle: IconButtonContentColor;
			unselected: IconButtonContentColor;
			selected: IconButtonContentColor;
		};
		container: {
			noToggle: IconButtonContainerColor;
			unselected: IconButtonContainerColor;
			selected: IconButtonContainerColor;
		};
	};
} = {
	filled: {
		icon: {
			noToggle: "onPrimary",
			unselected: "primary",
			selected: "onPrimary",
		},
		container: {
			noToggle: "primary",
			unselected: "surfaceVariant",
			selected: "primary",
		},
	},
	tonal: {
		icon: {
			noToggle: "onSecondaryContainer",
			unselected: "onSurfaceVariant",
			selected: "onSecondaryContainer",
		},
		container: {
			noToggle: "secondaryContainer",
			unselected: "surfaceVariant",
			selected: "secondaryContainer",
		},
	},
	outlined: {
		icon: {
			noToggle: "onSurfaceVariant",
			unselected: "onSurfaceVariant",
			selected: "onInverseSurface",
		},
		container: {
			noToggle: "none", // transparent
			unselected: "none", // transparent
			selected: "inverseSurface",
		},
	},
	standard: {
		icon: {
			noToggle: "onSurfaceVariant",
			unselected: "onSurfaceVariant",
			selected: "primary",
		},
		container: {
			noToggle: "none", // transparent
			unselected: "none", // transparent
			selected: "none", //transparent
		},
	},
};

interface StyledIconButtonProps extends Omit<IconButtonProps, "icon"> {}

export const StyledIconButton = styled.button<StyledIconButtonProps>(
	({ theme, variant, toggle, selected }) => css`
		display: inline-block;
		height: 2.5rem;
		width: 2.5rem;
		border-radius: ${theme.shape.rounded.full};
		border: none;
		overflow: hidden;
		position: relative;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		background-color: ${!toggle
			? theme.color[iconButtonColors[variant!].container.noToggle]
			: !selected
			? theme.color[iconButtonColors[variant!].container.unselected]
			: theme.color[iconButtonColors[variant!].container.selected]};
		* {
			pointer-events: none;
		}

		// Disabled
		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
	`
);

export const FilledIconButton = styled(StyledIconButton)(({ theme }) => css``);
export const TonalIconButton = styled(StyledIconButton)(({ theme }) => css``);
export const OutlinedIconButton = styled(StyledIconButton)(
	({ theme, toggle, selected }) => css`
		border: 1px solid ${!toggle || !selected ? theme.color.outline : theme.color.none};
		// Disabled
		&:disabled {
			border-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
		}
	`
);
export const StandardIconButton = styled(StyledIconButton)(
	({ theme }) => css`
		&:disabled {
			background-color: ${theme.color.none};
		}
	`
);
