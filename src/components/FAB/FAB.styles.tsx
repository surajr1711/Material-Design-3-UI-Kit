import styled, { css } from "styled-components";
import { FabColor, FabElevation, FabState, FabProps, FabSize, FabLayout, FabStyles } from "./Fab.types";

// FAB LAYOUTS
const fabLayouts: { [T in FabSize]: FabLayout } = {
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

// export const newFabColors: {
// 	[T in FabColor]: {
// 		container: FabContainerColor;
// 		content: FabContentColor;
// 	};
// } = {}

// FAB STYLES
export const fabStyles: { [T in FabColor]: FabStyles } = {
	primary: {
		containerColor: "primaryContainer",
		contentAndStateLayerColor: "onPrimaryContainer",
	},
	surface: {
		containerColor: "surface",
		contentAndStateLayerColor: "primary",
	},
	secondary: {
		containerColor: "secondaryContainer",
		contentAndStateLayerColor: "onSecondaryContainer",
	},
	tertiary: {
		containerColor: "tertiaryContainer",
		contentAndStateLayerColor: "onTertiaryContainer",
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
		background-color: ${theme.color[fabStyles[color!].containerColor]};
		overflow: hidden;
		position: relative;
		box-shadow: ${theme.elevation.boxShadow[elevation!]};
		* {
			pointer-events: none;
		}
	`;
});

// for use as fab.icon prop style values. Consumer can just prop spread props according to the type of fab he's using. Example: if hes using a largeFab with surface color, then his fabicon will be <Fab.Icon {...fabIconProps.largeFab.surface} >add</Fab.Icon>
export interface FabContentStyles {
	color: FabStyles["contentAndStateLayerColor"];
	sizeInRems: FabLayout["iconSizeInRems"];
}

export const fabContentStyles: {
	[S in FabSize]: {
		[C in FabColor]: FabContentStyles;
	};
} = {
	fab: {
		primary: {
			sizeInRems: fabLayouts.fab.iconSizeInRems,
			color: fabStyles.primary.contentAndStateLayerColor,
		},
		surface: {
			sizeInRems: fabLayouts.fab.iconSizeInRems,
			color: fabStyles.surface.contentAndStateLayerColor,
		},
		secondary: {
			sizeInRems: fabLayouts.fab.iconSizeInRems,
			color: fabStyles.secondary.contentAndStateLayerColor,
		},
		tertiary: {
			sizeInRems: fabLayouts.fab.iconSizeInRems,
			color: fabStyles.tertiary.contentAndStateLayerColor,
		},
	},
	smallFab: {
		primary: {
			sizeInRems: fabLayouts.smallFab.iconSizeInRems,
			color: fabStyles.primary.contentAndStateLayerColor,
		},
		surface: {
			sizeInRems: fabLayouts.smallFab.iconSizeInRems,
			color: fabStyles.surface.contentAndStateLayerColor,
		},
		secondary: {
			sizeInRems: fabLayouts.smallFab.iconSizeInRems,
			color: fabStyles.secondary.contentAndStateLayerColor,
		},
		tertiary: {
			sizeInRems: fabLayouts.smallFab.iconSizeInRems,
			color: fabStyles.tertiary.contentAndStateLayerColor,
		},
	},
	largeFab: {
		primary: {
			sizeInRems: fabLayouts.largeFab.iconSizeInRems,
			color: fabStyles.primary.contentAndStateLayerColor,
		},
		surface: {
			sizeInRems: fabLayouts.largeFab.iconSizeInRems,
			color: fabStyles.surface.contentAndStateLayerColor,
		},
		secondary: {
			sizeInRems: fabLayouts.largeFab.iconSizeInRems,
			color: fabStyles.secondary.contentAndStateLayerColor,
		},
		tertiary: {
			sizeInRems: fabLayouts.largeFab.iconSizeInRems,
			color: fabStyles.tertiary.contentAndStateLayerColor,
		},
	},
};

// used for fab.label just like fab.icon. Consumer can just prop spread props according to the type of fab he's using. Example: if hes using a largeFab with surface color, then his fablabel will be <Fab.Label {...fabLabelProps.surface} >add</Fab.Label>
// export const fabLabelProps: {
// 	[T in FabColor]: Pick<TypeProps, "color" | "typescale" | "tag">;
// } = {
// 	primary: {
// 		color: fabStyles.primary.contentAndStateLayerColor,
// 		typescale: "labelLarge",
// 		tag: "label",
// 	},
// 	surface: {
// 		color: fabStyles.surface.contentAndStateLayerColor,
// 		typescale: "labelLarge",
// 		tag: "label",
// 	},
// 	secondary: {
// 		color: fabStyles.secondary.contentAndStateLayerColor,
// 		typescale: "labelLarge",
// 		tag: "label",
// 	},
// 	tertiary: {
// 		color: fabStyles.tertiary.contentAndStateLayerColor,
// 		typescale: "labelLarge",
// 		tag: "label",
// 	},
// };
