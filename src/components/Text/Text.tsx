import React, { ElementType } from "react";
import PropType from "prop-types";
import {
	// PolymorphicRef,
	// Props,
	// TextProps,
	TextProps,
	textTag,
} from "./Text.types";
import { typescaleKeys } from "../../styles/typescale";
import { StyledText } from "./Text.styles";
import { colorKeys } from "../../styles/colors";

const Text: React.FC<TextProps & React.ComponentPropsWithoutRef<ElementType<any>>> = ({
	children = "Default Text",
	typescale = "bodyLarge",
	tag = "span",
	color = "onSurface",
	...restProps
}) => {
	// if children is string trim whitespace from beginning and end
	const trimmedText = typeof children === "string" ? children.trim() : children;
	// if trimmedtext is empty use 'Default text'
	const sanitizedText = !!trimmedText ? trimmedText : "Default Text";
	return (
		<StyledText typescale={typescale} as={tag} color={color} {...restProps}>
			{sanitizedText}
		</StyledText>
	);
};

Text.displayName = "Text";

// PROPTYPES
Text.propTypes = {
	children: PropType.oneOfType([PropType.string, PropType.number]),
	tag: PropType.oneOf(textTag),
	typescale: PropType.oneOf(typescaleKeys),
	color: PropType.oneOf(colorKeys),
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
