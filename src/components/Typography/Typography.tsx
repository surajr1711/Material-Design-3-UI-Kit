import React from "react";

import { StyledTypographyProps, StyledTypography } from "./Typography.styles";

export type TagType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

interface TypographyProps extends StyledTypographyProps {
	tag?: TagType;
	children?: string | number; // for large text
	label?: string | number;
}

const Typography: React.FC<TypographyProps> = ({ typescale, tag, color, children, label, ...props }) => {
	return (
		<StyledTypography typescale={typescale} as={tag} color={color} {...props}>
			{children || label}
		</StyledTypography>
	);
};

Typography.defaultProps = {
	typescale: "bodyLarge",
	tag: "p",
	children: "",
	label: "",
	color: "onBackground",
};

export default Typography;
