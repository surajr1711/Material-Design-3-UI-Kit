// IMPORTS
import React from "react";
import PropTypes from "prop-types";
// Types
import { iconContentColor, IconProps, iconVariant } from "./Icon.types";
// Styles
import { StyledIcon } from "./Icon.styles";

// COMPONENT DEFINITION
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
	({ children = "home", color = "primary", variant = "filled", sizeInRems = 1, ...restProps }, ref) => {
		return (
			<StyledIcon ref={ref} color={color} variant={variant} sizeInRems={sizeInRems} {...restProps}>
				{children}
			</StyledIcon>
		);
	}
);

Icon.displayName = "Icon";

// PROPTYPES
Icon.propTypes = {
	children: PropTypes.string,
	color: PropTypes.oneOf(iconContentColor),
	variant: PropTypes.oneOf(iconVariant),
	sizeInRems: PropTypes.number,
};

export default Icon;
