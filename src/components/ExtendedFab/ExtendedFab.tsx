// IMPORTS
// 3rd party packages
import React, { useState } from "react";
import PropType from "prop-types";
// Types
import { FabState, fabColor, FabContextObj } from "../FAB/Fab.types";
import { ExtendedFabProps, ExtendedFabComposition, extFabWidthKeys } from "./ExtendedFab.types";
// Hooks and utils
import { FabContext } from "../FAB/FabContext";
// Custom components
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import { FlexBox } from "../spacing/FlexBox";
import FabIcon from "../FAB/FabIcon";
import FabLabel from "../FAB/FabLabel";
// Styles
import { extFabLayout, StyledExtendedFab } from "./ExtendedFab.styles";
import { fabColors, fabStateElevations } from "../FAB/Fab.styles";

// COMPNENT DEFINITION
const placeholder = (
	<FlexBox>
		<FabIcon />
		<FabLabel />
	</FlexBox>
);
const ExtendedFab = React.forwardRef<HTMLButtonElement, ExtendedFabProps>(
	(
		{
			children = placeholder,
			render = true,
			color = "primary",
			tooltip = "",
			width = "fixed",
			disabled, // Fab should never be disabled
			onClick,
			onMouseEnter,
			onMouseLeave,
			onFocus,
			...restProps
		},
		ref
	) => {
		const [fabState, setFabState] = useState<FabState>("enabled");

		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			setFabState("pressed");
			if (onClick) onClick(e);
		};
		const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
			setFabState("hover");
			if (onMouseEnter) onMouseEnter(e);
		};
		const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
			setFabState("enabled");
			if (onMouseLeave) onMouseLeave(e);
		};
		const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
			setFabState("focus");
			if (onFocus) onFocus(e);
		};

		// Interaction template needs elevation and statelayercolor
		const fabElevation = fabStateElevations[fabState];
		const contentAndStateLayerColor = fabColors[color!].content;

		// This will be used by fab.icon and fab.label child components for styles
		const fabContextValue: FabContextObj = {
			color: contentAndStateLayerColor,
			sizeInRems: extFabLayout.iconSizeInRems,
		};

		if (!render) return null;

		return (
			<FabContext.Provider value={fabContextValue}>
				<StyledExtendedFab
					ref={ref}
					color={color}
					width={width}
					elevation={fabElevation}
					tooltip={tooltip}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={handleClick}
					onFocus={handleFocus}
					{...restProps}
				>
					<InteractionTemplate elevation={fabElevation} state={fabState} stateLayerColor={contentAndStateLayerColor}>
						{children}
					</InteractionTemplate>
				</StyledExtendedFab>
			</FabContext.Provider>
		);
	}
	// ) as FabComposition;
);

// // COMPOSITION
// Fab.Icon = Icon;
// Fab.Label = Type;

// PROPTYPES
ExtendedFab.propTypes = {
	children: PropType.element,
	render: PropType.bool,
	color: PropType.oneOf(fabColor),
	width: PropType.oneOf(extFabWidthKeys),
	tooltip: PropType.string,
};

export default Object.assign(ExtendedFab, {
	Icon: FabIcon,
	Label: FabLabel,
	Wrapper: FlexBox,
}) as ExtendedFabComposition;
// export default Fab;
