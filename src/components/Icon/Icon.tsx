import React from "react";
import PropType from "prop-types";
import { iconContentColor, IconProps, iconVariant } from "./Icon.types";
import styled, { css } from "styled-components";

// STYLES
const StyledIcon = styled.span.attrs<IconProps>(({ variant }) => ({
	className: variant === "filled" ? "material-icons" : "material-icons-outlined",
}))<IconProps>(
	({ theme, color, sizeInRems, visibility }) => css`
		color: ${theme.color[color!]};
		font-size: ${sizeInRems}rem;
		visibility: ${visibility ? "visible" : "hidden"};
		transition: color ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized},
			font-size ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};
	`
);

// COMPONENT DEFINITION
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
	(
		{ children = "home", color = "primary", variant = "filled", sizeInRems = 1.5, visibility = true, ...restProps },
		ref
	) => {
		return (
			<StyledIcon
				ref={ref}
				color={color}
				variant={variant}
				sizeInRems={sizeInRems}
				visibility={visibility}
				{...restProps}
			>
				{children}
			</StyledIcon>
		);
	}
);

Icon.displayName = "Icon";

// PROPTYPES
Icon.propTypes = {
	children: PropType.string,
	color: PropType.oneOf(iconContentColor),
	variant: PropType.oneOf(iconVariant),
	sizeInRems: PropType.number,
	visibility: PropType.bool,
};

export default Icon;
