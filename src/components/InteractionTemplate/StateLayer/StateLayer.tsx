// IMPORTS
// 3rd party packages
import React from "react";
import PropTypes from "prop-types";
// Types
import { StateLayerProps } from "./StateLayer.types";
import { stateKeys } from "../../../styles/interactionStates";
// Styles
import { StyledStateLayer } from "./StateLayer.styles";
import { onColorKeys } from "../../../styles/colors";

// COMPONENT DEFINITION
const StateLayer = React.forwardRef<HTMLDivElement, StateLayerProps>(
	({ stateLayerColor = "onPrimary", state = "enabled", ...props }, ref) => {
		return <StyledStateLayer ref={ref} stateLayerColor={stateLayerColor} state={state} {...props} />;
	}
);

// PROPTYPES
StateLayer.propTypes = {
	stateLayerColor: PropTypes.oneOf(onColorKeys).isRequired,
	state: PropTypes.oneOf(stateKeys).isRequired,
};

// EXPORTS
export default StateLayer;
