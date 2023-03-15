// IMPORTS
import React from "react";
import PropType from "prop-types";
// Types
import { iconContentColor, IconProps, iconVariant } from "./Icon.types";
// Styles
import { StyledIcon } from "./Icon.styles";

// COMPONENT DEFINITION
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
	({ children = "home", color = "primary", variant = "filled", sizeInRems = 1, render = true, ...restProps }, ref) => {
		if (!render) return null;
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
	children: PropType.string,
	render: PropType.bool,
	color: PropType.oneOf(iconContentColor),
	variant: PropType.oneOf(iconVariant),
	sizeInRems: PropType.number,
};

export default Icon;
