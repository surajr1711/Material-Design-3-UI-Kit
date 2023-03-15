// IMPORTS
// 3rd party packages
import React from "react";
import PropType from "prop-types";
// Types
import { typeContentColorKeys, TypeProps, typeTag } from "./Type.types";
import { typescaleKeys } from "../../styles/typescale";
// Styles
import { StyledType } from "./Type.styles";

// COMPONENT DEFINITION
const Type: React.FC<TypeProps> = ({
	children = "Default Text",
	render = true,
	typescale = "bodyLarge",
	tag = "p",
	color = "onSurface",
	...restProps
}) => {
	if (!render) return null;

	return (
		<StyledType typescale={typescale} as={tag} color={color} {...restProps}>
			{children}
		</StyledType>
	);
};

Type.displayName = "Typography";

// PROPTYPES
Type.propTypes = {
	children: PropType.oneOfType([PropType.string, PropType.number]),
	render: PropType.bool,
	tag: PropType.oneOf(typeTag),
	typescale: PropType.oneOf(typescaleKeys),
	color: PropType.oneOf(typeContentColorKeys),
};

// EXPORTS
export default Type;
