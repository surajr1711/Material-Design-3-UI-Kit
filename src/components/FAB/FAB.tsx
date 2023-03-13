// IMPORTS
// 3rd party packages
import React, { useState } from "react";
import PropType from "prop-types";
// Types
import { fabColor, fabSize, FabProps, FabState, FabComposition } from "./Fab.types";
// Hooks and utils
import { FabContext } from "./FabContext";
// Custom components
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import { fabContentStyles, FabContentStyles, fabStateElevations, fabStyles, StyledFab } from "./Fab.styles";
import Type from "../Type";
import { FlexBox } from "../spacing/FlexBox";
import FabIcon from "./FabIcon";
// Styles

// COMPNENT DEFINITION
const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
	(
		{
			children = <FabIcon />,
			color = "primary",
			size = "fab",
			tooltip = "",
			disabled, // Fab should never be disabled
			onClick,
			...restProps
		},
		ref
	) => {
		const [fabState, setFabState] = useState<FabState>("enabled");

		const handleClick = (e: React.MouseEvent) => {
			console.log(e.type);
			setFabState("pressed");
		};
		const handleMouseEnter = (e: React.MouseEvent) => {
			console.log(e.type);
			setFabState("hover");
		};
		const handleMouseLeave = (e: React.MouseEvent) => {
			console.log(e.type);
			setFabState("enabled");
		};

		// Interaction template needs elevation and statelayercolor
		const fabElevation = fabStateElevations[fabState];
		const { contentAndStateLayerColor } = fabStyles[color!];

		// This will be used by fab.icon and fab.label child components for styles
		const fabContextValue: FabContentStyles = {
			color: contentAndStateLayerColor,
			sizeInRems: fabContentStyles[size][color].sizeInRems!,
		};

		return (
			<FabContext.Provider value={fabContextValue}>
				<StyledFab
					ref={ref}
					elevation={fabElevation}
					size={size}
					tooltip={tooltip}
					color={color}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
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
	color: PropType.oneOf(fabColor),
	size: PropType.oneOf(fabSize),
	tooltip: PropType.string,
};

export default Object.assign(Fab, { Icon: FabIcon, Label: Type, Wrapper: FlexBox }) as FabComposition;
// export default Fab;
