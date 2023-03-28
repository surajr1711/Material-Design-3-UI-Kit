import React from "react";
import PropType from "prop-types";
import { fabColor, fabSize, FabProps } from "./Fab.types";
import { useInteractionHandlers } from "../InteractionTemplate/useInteractionHandlers";
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import { fabStateElevations, fabColors, StyledFab, fabLayouts } from "./Fab.styles";
import Icon from "../Icon";

// COMPNENT DEFINITION
const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
	(
		{
			render = true,
			color = "primary",
			size = "fab",
			tooltip = "",
			icon = (
				<Icon color="onPrimaryContainer" sizeInRems={1.5}>
					edit
				</Icon>
			),
			disabled, // Fab should never be disabled
			draggable, // Fab should never be draggable
			onMouseDown,
			onMouseUp,
			onMouseEnter,
			onMouseLeave,
			onFocus,
			...restProps
		},
		ref
	) => {
		// adds interaction state handlers
		const { interactionState: state, eventHandlers } = useInteractionHandlers("enabled", {
			onMouseUp,
			onMouseDown,
			onMouseEnter,
			onMouseLeave,
			onFocus,
		});

		// Interaction template needs elevation and statelayercolor
		const elevation = fabStateElevations[state];
		const contentColor = fabColors[color].content;

		// style icon according to fab style. (overrides any icon props passed by user)
		const fabIcon = React.cloneElement(icon, { color: contentColor, sizeInRems: fabLayouts[size].iconSizeInRems });

		// RENDER
		if (!render) return null;
		return (
			<StyledFab
				ref={ref}
				elevation={elevation}
				size={size}
				tooltip={tooltip}
				color={color}
				{...eventHandlers}
				{...restProps}
			>
				<InteractionTemplate elevation={elevation} state={state} stateLayerColor={contentColor}>
					{fabIcon}
				</InteractionTemplate>
			</StyledFab>
		);
	}
);

// PROPTYPES
Fab.propTypes = {
	icon: PropType.element.isRequired,
	render: PropType.bool,
	color: PropType.oneOf(fabColor),
	size: PropType.oneOf(fabSize),
	tooltip: PropType.string,
};

export default Fab;
