import React from "react";

import { StyledIcon, StyledIconProps } from "./Icon.styles";

interface IconProps extends StyledIconProps {
	label: string;
}

const Icon: React.FC<IconProps> = ({ label, color, variant, size }) => {
	return (
		<StyledIcon color={color} variant={variant} size={size}>
			{label}
		</StyledIcon>
	);
};

export default Icon;

Icon.defaultProps = {
	label: "home",
	variant: "filled",
	color: "primary",
	size: 1.25,
};
