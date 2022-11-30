import React from "react";

import { StyledIcon, StyledIconProps } from "./Icon.styles";

interface IconProps extends StyledIconProps {
	label?: string;
}

const Icon: React.FC<IconProps> = ({ label, color, variant, sizeInRems }) => {
	return (
		<StyledIcon color={color} variant={variant} sizeInRems={sizeInRems}>
			{label}
		</StyledIcon>
	);
};

export default Icon;

Icon.defaultProps = {
	label: "home",
	variant: "filled",
	color: "primary",
	sizeInRems: 1,
};
