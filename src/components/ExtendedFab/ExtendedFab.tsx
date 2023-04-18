import React from "react";
import PropType from "prop-types";
import { fabColor } from "../Fab/Fab.types";
import { ExtendedFabProps, extFabWidthKeys } from "./ExtendedFab.types";
import { extFabLayout, StyledExtendedFab } from "./ExtendedFab.styles";
import { fabColors, fabStateElevations } from "../Fab/Fab.styles";
import Icon from "../Icon";
import Text from "../Text";
import { ContentLayer, StateLayer, TintLayer } from "../InteractionLayers";

// COMPNENT DEFINITION
const ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>(
	(
		{
			icon = "edit",
			label = "Start composing",
			color = "primary",
			tooltip = "",
			width = "fixed",
			withIcon = true,
			disabled, // Fab should never be disabled
			draggable, // Fab should never be draggable
			...restProps
		},
		ref
	) => {
		const renderTintLayer = color === "surface";
		const elevation = fabStateElevations.enabled;
		const contentColor = fabColors[color!].content;

		return (
			<StyledExtendedFab ref={ref} color={color} width={width} tooltip={tooltip} {...restProps}>
				{renderTintLayer && <TintLayer elevation={elevation} />}
				<StateLayer stateLayerColor={contentColor} />
				<ContentLayer>
					{withIcon && (
						<Icon color={contentColor} sizeInRems={extFabLayout.iconSizeInRems}>
							{icon}
						</Icon>
					)}
					<Text color={contentColor} typescale="labelLarge">
						{label}
					</Text>
				</ContentLayer>
			</StyledExtendedFab>
		);
	}
);

// PROPTYPES
ExtendedFab.propTypes = {
	icon: PropType.string,
	label: PropType.string,
	color: PropType.oneOf(fabColor),
	width: PropType.oneOf(extFabWidthKeys),
	tooltip: PropType.string,
	withIcon: PropType.bool,
};

export default ExtendedFab;
