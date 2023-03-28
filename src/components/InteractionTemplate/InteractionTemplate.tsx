import React from "react";
import PropTypes from "prop-types";
import { STProps } from "./SurfaceTint";
import { elevationKeys } from "../../styles/elevation";
import { SLProps, stateLayerColors } from "./StateLayer";
import { stateKeys } from "../../styles/interactionStates";
import { CLProps } from "./ContentLayer";
import SurfaceTint from "./SurfaceTint";
import StateLayer from "./StateLayer";
import ContentLayer from "./ContentLayer";

export interface InteractionProps extends Omit<STProps, "render">, Omit<SLProps, "render">, CLProps {}

// COMPONENT DEFINITION
const InteractionTemplate: React.FC<InteractionProps> = ({
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

// PROPTYPES
InteractionTemplate.propTypes = {
	children: PropTypes.element,
	elevation: PropTypes.oneOf(elevationKeys).isRequired,
	state: PropTypes.oneOf(stateKeys).isRequired,
	stateLayerColor: PropTypes.oneOf(stateLayerColors).isRequired,
};

export default InteractionTemplate;
