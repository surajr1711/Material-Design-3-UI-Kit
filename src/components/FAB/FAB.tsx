import React from "react";
import PropType from "prop-types";
import { fabColor, fabSize, FabProps } from "./Fab.types";
import { fabStateElevations, fabColors, StyledFab, fabLayouts } from "./Fab.styles";
import Icon from "../Icon";
import { ContentLayer, StateLayer, TintLayer } from "../InteractionLayers";

// COMPONENT DEFINITION
const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
	(
		{
			color = "primary",
			size = "fab",
			tooltip = "",
			icon = "edit",
			disabled, // Fab should never be disabled
			draggable, // Fab should never be draggable
			...restProps
		},
		ref
	) => {
		const renderTintLayer = color === "surface";
		const elevation = fabStateElevations.enabled;
		const contentColor = fabColors[color].content;

		return (
			<StyledFab ref={ref} size={size} tooltip={tooltip} color={color} {...restProps}>
				{renderTintLayer && <TintLayer elevation={elevation} />}
				<StateLayer stateLayerColor={contentColor} />
				<ContentLayer>
					<Icon color={contentColor} sizeInRems={fabLayouts[size].iconSizeInRems}>
						{icon}
					</Icon>
				</ContentLayer>
			</StyledFab>
		);
	}
);

// PROPTYPES
Fab.propTypes = {
	icon: PropType.string,
	color: PropType.oneOf(fabColor),
	size: PropType.oneOf(fabSize),
	tooltip: PropType.string,
};

export default Fab;
