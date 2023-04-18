import React from "react";
import PropTypes from "prop-types";
import { DensityInRemsType, densityType, DensityType, SegButtonComposition, SegButtonProps } from "./SegButton.types";
import { SegButtonContext } from "./SegButtonContext";
import { useUniqueID } from "../../utils/useUniqueID";
import Input from "./Input";
import Label from "./Label";
import { StyledSegButton } from "./SegButton.styles";

// HOOKS
const useDensityInRems = (density: DensityType): DensityInRemsType => {
	// calculate height of segmented buttons. Known in md3 guidelines as density
	return (2.5 + density! * 0.25) as DensityInRemsType;
};

// COMPONENT DEFINITION
const SegButton: React.FC<SegButtonProps> & SegButtonComposition = ({ children, density = 0 }) => {
	// create a common ID for input and label children
	const id = useUniqueID();

	return (
		<SegButtonContext.Provider value={id}>
			<StyledSegButton densityInRems={useDensityInRems(density!)}>
				<div data-md3role="stateLayer" />
				{children}
			</StyledSegButton>
		</SegButtonContext.Provider>
	);
};

// COMPOSITION
SegButton.Label = Label;
SegButton.Input = Input;

// PROPTYPES
SegButton.propTypes = {
	children: PropTypes.element,
	density: PropTypes.oneOf(densityType).isRequired,
};

export default SegButton;
