import React from "react";

import { StyledTypographyProps, StyledTypography } from "./Typography.styles";

export type TagType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

interface TypographyProps extends StyledTypographyProps {
	tag?: TagType;
	children?: string; // for large text
	label?: string;
}

const Typography: React.FC<TypographyProps> = ({ type, tag, color, children, label, disabled }) => {
	return (
		<StyledTypography type={type} as={tag} color={color} disabled={disabled}>
			{children || label}
		</StyledTypography>
	);
};

Typography.defaultProps = {
	type: "bodyLarge",
	tag: "p",
	children: "",
	label: "",
	color: "onBackground",
	disabled: false,
};

export default Typography;
