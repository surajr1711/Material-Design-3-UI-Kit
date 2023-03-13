// IMPORTS
// 3rd party packages
import React, { useState } from "react";
import PropType from "prop-types";
// Types
// Hooks and utils
// Custom components
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import Type from "../Type";
import { FlexBox } from "../spacing/FlexBox";
// Styles
import { extFabColors, extFabLayout, StyledExtendedFab } from "./ExtendedFab.styles";
import { fabStateElevations } from "../FAB/Fab.styles";
import { ExtendedFabProps, FabState, fabColor, ExtendedFabComposition } from "../FAB/Fab.types";
import { FabContext } from "../FAB/FabContext";
import FabIcon from "../FAB/FabIcon";
import FabLabel from "../FAB/FabLabel";

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
			color = "primary",
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
		const { content: contentAndStateLayerColor } = extFabColors[color!];

		// This will be used by fab.icon and fab.label child components for styles
		const fabContextValue = {
			color: contentAndStateLayerColor,
			sizeInRems: extFabLayout.iconSizeInRems,
		};

		return (
			<FabContext.Provider value={fabContextValue}>
				<StyledExtendedFab
					ref={ref}
					elevation={fabElevation}
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
	color: PropType.oneOf(fabColor),
	tooltip: PropType.string,
};

export default Object.assign(ExtendedFab, {
	Icon: FabIcon,
	Label: FabLabel,
	Wrapper: FlexBox,
}) as ExtendedFabComposition;
// export default Fab;
