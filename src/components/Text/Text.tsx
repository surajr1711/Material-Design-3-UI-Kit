import React from "react";
import PropType from "prop-types";
import {
	// PolymorphicRef,
	// Props,
	// TextProps,
	textColorKeys,
	TextProps,
	textTag,
} from "./Text.types";
import { typescaleKeys } from "../../styles/typescale";
import { StyledText } from "./Text.styles";

const Text: React.FC<TextProps> = ({
	children = "Default Text",
	render = true,
	typescale = "bodyLarge",
	tag = "span",
	color = "onSurface",
	...restProps
}) => {
	if (!render) return null;

	return (
		<StyledText typescale={typescale} as={tag} color={color} {...restProps}>
			{children}
		</StyledText>
	);
};

Text.displayName = "Text";

// PROPTYPES
Text.propTypes = {
	children: PropType.oneOfType([PropType.string, PropType.number]),
	render: PropType.bool,
	tag: PropType.oneOf(textTag),
	typescale: PropType.oneOf(typescaleKeys),
	color: PropType.oneOf(textColorKeys),
};

export default Text;

// // COMPONENT DEFINITION (Polymorphic gets complicated. Moved on 🤷)
// const Text = React.forwardRef(
// 	<C extends React.ElementType = "span">(
// 		{
// 			as,
// 			children = "Default Text",
// 			render = true,
// 			typescale = "bodyLarge",
// 			color = "onSurface",
// 			...restProps
// 		}: TextProps<C>,
// 		ref?: PolymorphicRef<C>
// 	) => {

// 		if (!render) return null;

// 		const Component = as || "span";

// 		return (
// 			<Component ref={ref} {...restProps}>
// 				{children}
// 				<div></div>
// 			</Component>
// 		);
// 	}
// );
