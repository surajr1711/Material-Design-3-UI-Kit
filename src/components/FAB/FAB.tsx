// IMPORTS
// 3rd party packages
import React, { useState } from "react";
import PropType from "prop-types";
// Types
import { fabColor, fabSize, FabProps, FabState, FabComposition, FabContextObj } from "./Fab.types";
// Hooks and utils
import { FabContext } from "./FabContext";
// Custom components
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import Type from "../Type";
import { FlexBox } from "../spacing/FlexBox";
import FabIcon from "./FabIcon";
// Styles
import { fabStateElevations, fabColors, StyledFab, fabLayouts } from "./Fab.styles";

// COMPNENT DEFINITION
const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
	(
		{
			children = <FabIcon />,
			render = true,
			color = "primary",
			size = "fab",
			tooltip = "",
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
		const contentAndStateLayerColor = fabColors[color].content;

		// This will be used by fab.icon and fab.label child components for styles
		const fabContextValue: FabContextObj = {
			color: contentAndStateLayerColor,
			sizeInRems: fabLayouts[size].iconSizeInRems,
		};

		if (!render) return null;

		return (
			<FabContext.Provider value={fabContextValue}>
				<StyledFab
					ref={ref}
					elevation={fabElevation}
					size={size}
					tooltip={tooltip}
					color={color}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onFocus={handleFocus}
					onClick={handleClick}
					{...restProps}
				>
					<InteractionTemplate elevation={fabElevation} state={fabState} stateLayerColor={contentAndStateLayerColor}>
						{children}
					</InteractionTemplate>
				</StyledFab>
			</FabContext.Provider>
		);
	}
	// ) as FabComposition;
);

// // COMPOSITION
// Fab.Icon = Icon;
// Fab.Label = Type;

// PROPTYPES
Fab.propTypes = {
	children: PropType.element,
	render: PropType.bool,
	color: PropType.oneOf(fabColor),
	size: PropType.oneOf(fabSize),
	tooltip: PropType.string,
};

export default Object.assign(Fab, { Icon: FabIcon, Label: Type, Wrapper: FlexBox }) as FabComposition;
// export default Fab;
