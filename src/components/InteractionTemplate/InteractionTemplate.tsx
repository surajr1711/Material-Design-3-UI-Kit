// IMPORTS
import React from "react";
import PropTypes from "prop-types";
// Types
import { ContentLayerProps } from "./ContentLayer/ContentLayer";
import { stateLayerColors, StateLayerProps } from "./StateLayer/StateLayer.types";
import { SurfaceTintProps } from "./SurfaceTint/SurfaceTint";
// import { onColorKeys } from "../../styles/colors";
import { elevationKeys } from "../../styles/elevation";
import { stateKeys } from "../../styles/interactionStates";
// Custom components
import SurfaceTint from "./SurfaceTint";
import StateLayer from "./StateLayer";
import ContentLayer from "./ContentLayer";

// TYPES
export interface InteractionProps extends SurfaceTintProps, StateLayerProps, ContentLayerProps {}
export interface InteractionComposition {
	SurfaceTint: typeof SurfaceTint;
	StateLayer: typeof StateLayer;
	ContentLayer: typeof ContentLayer;
}

// COMPONENT DEFINITION
const InteractionTemplate: React.FC<InteractionProps> & InteractionComposition = ({
	children = "",
	elevation = "level0",
	state = "enabled",
	stateLayerColor = "onPrimary",
}) => {
	return (
		<>
			<SurfaceTint elevation={elevation} />
			<StateLayer state={state} stateLayerColor={stateLayerColor} />
			<ContentLayer state={state}>{children}</ContentLayer>
		</>
	);
};

InteractionTemplate.SurfaceTint = SurfaceTint;
InteractionTemplate.StateLayer = StateLayer;
InteractionTemplate.ContentLayer = ContentLayer;

// PROPTYPES
InteractionTemplate.propTypes = {
	children: PropTypes.element,
	elevation: PropTypes.oneOf(elevationKeys).isRequired,
	state: PropTypes.oneOf(stateKeys).isRequired,
	stateLayerColor: PropTypes.oneOf(stateLayerColors).isRequired,
};

// EXPORTS
export default InteractionTemplate;
