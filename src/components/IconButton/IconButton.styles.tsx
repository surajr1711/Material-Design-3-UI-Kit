import {
	IconButtonContainerColor,
	IconButtonContentColor,
	IconButtonProps,
	IconButtonVariant,
} from "./IconButton.types";
import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { useInteractionLayersCSS } from "../InteractionLayers";

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

export const StyledIconButton = styled.button<IconButtonProps>(
	({ theme, variant, toggle, selected }) => css`
		display: inline-block;
		height: ${iconButtonLayout.height}rem;
		width: ${iconButtonLayout.width}rem;
		border-radius: ${theme.shape[iconButtonLayout.shapeFamily][iconButtonLayout.shapeScale]};
		border: none;
		overflow: hidden;
		position: relative;
		isolation: isolate;

		${useInteractionLayersCSS()}
	`
);

export const FilledIconButton = styled(StyledIconButton)(
	({ theme, variant, toggle, selected }) => css`
		background-color: ${!toggle || selected
			? theme.color[iconButtonColors[variant!].container.noToggle]
			: theme.color[iconButtonColors[variant!].container.unselected]};

		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
	`
);

export const TonalIconButton = styled(StyledIconButton)(
	({ theme, variant, toggle, selected }) => css`
		background-color: ${!toggle || selected
			? theme.color[iconButtonColors[variant!].container.noToggle]
			: theme.color[iconButtonColors[variant!].container.unselected]};

		&:disabled {
			background-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
		}
	`
);

export const OutlinedIconButton = styled(StyledIconButton)(
	({ theme, variant, toggle, selected }) => css`
		background-color: ${!toggle || !selected
			? theme.color[iconButtonColors[variant!].container.noToggle]
			: theme.color[iconButtonColors[variant!].container.selected]};
		border: ${!toggle || !selected ? `1px solid ${theme.color.outline}` : `none`};

		&:disabled {
			background-color: ${!toggle || !selected
				? theme.color.none
				: setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.container.disabled)};
			${(!toggle || !selected) &&
			`
				border-color: ${setAlphaOnHex(theme.color.onSurface, theme.stateOpacity.outline.disabled)};
			`}
		}
	`
);

export const StandardIconButton = styled(StyledIconButton)(
	({ theme, toggle, selected }) => css`
		background-color: ${theme.color.none};
	`
);
