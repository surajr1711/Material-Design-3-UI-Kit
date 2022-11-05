import React from "react";
import { StyledStateLayer, StyledStateLayerProps } from "./StateLayer.styles";

interface StateLayerProps extends StyledStateLayerProps {
	children?: React.ReactNode;
}

const StateLayer: React.FC<StateLayerProps> = ({ state, color, children }) => {
	return (
		<StyledStateLayer state={state} color={color}>
			{children}
		</StyledStateLayer>
	);
};

StateLayer.defaultProps = {
	state: "none",
	color: "primary",
	// variant: "filled",
};

export default StateLayer;
