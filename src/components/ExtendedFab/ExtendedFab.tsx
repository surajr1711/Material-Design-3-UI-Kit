import React from "react";
import PropType from "prop-types";
import { fabColor } from "../FAB/Fab.types";
import { ExtendedFabProps, extFabWidthKeys } from "./ExtendedFab.types";
import { useInteractionHandlers } from "../InteractionTemplate/useInteractionHandlers";
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import { ContentWrapper, extFabLayout, StyledExtendedFab } from "./ExtendedFab.styles";
import { fabColors, fabStateElevations } from "../FAB/Fab.styles";
import Icon from "../Icon";
import Text from "../Text";

// COMPNENT DEFINITION
const ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>(
	(
		{
			icon = (
				<Icon color="onPrimaryContainer" sizeInRems={1.5}>
					edit
				</Icon>
			),
			label = (
				<Text typescale="labelLarge" color="onPrimaryContainer">
					Start composing
				</Text>
			),
			render = true,
			color = "primary",
			tooltip = "",
			width = "fixed",
			disabled, // Fab should never be disabled
			draggable, // Fab should never be draggable
			onMouseEnter,
			onMouseLeave,
			onMouseDown,
			onMouseUp,
			onFocus,
			...restProps
		},
		ref
	) => {
		const { interactionState, eventHandlers } = useInteractionHandlers("enabled", {
			onMouseEnter,
			onMouseLeave,
			onMouseDown,
			onMouseUp,
			onFocus,
		});

		// STYLES
		// Interaction template needs elevation and statelayercolor
		const elevation = fabStateElevations[interactionState];
		const contentColor = fabColors[color!].content;

		// Styling defaults. Overrides supplied icon and label elements' props
		const fabIcon = React.cloneElement(icon, { color: contentColor, sizeInRems: extFabLayout.iconSizeInRems });

		const fabLabel = React.cloneElement(label, { color: contentColor, typescale: "labelLarge" });

		// RENDER
		if (!render) return null;
		return (
			<StyledExtendedFab
				ref={ref}
				color={color}
				width={width}
				elevation={elevation}
				tooltip={tooltip}
				{...eventHandlers}
				{...restProps}
			>
				<InteractionTemplate elevation={elevation} state={interactionState} stateLayerColor={contentColor}>
					<ContentWrapper>
						{fabIcon}
						{fabLabel}
					</ContentWrapper>
				</InteractionTemplate>
			</StyledExtendedFab>
		);
	}
);

// PROPTYPES
ExtendedFab.propTypes = {
	icon: PropType.element.isRequired,
	label: PropType.element.isRequired,
	render: PropType.bool,
	color: PropType.oneOf(fabColor),
	width: PropType.oneOf(extFabWidthKeys),
	tooltip: PropType.string,
};

export default ExtendedFab;
