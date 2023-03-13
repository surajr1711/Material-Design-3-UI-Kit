// IMPORTS
import React from "react";
import styled from "styled-components";
import Type from "../Type";

// TYPES
export interface CardTextProps extends React.ComponentPropsWithRef<"div"> {
	children?: JSX.Element | JSX.Element[];
}
export interface CardTextComposition
	extends React.ForwardRefExoticComponent<CardTextProps & React.RefAttributes<HTMLDivElement>> {
	Headline: typeof Type;
	Subhead: typeof Type;
	SupportingText: typeof Type;
}

// STYLES
const StyledCardText = styled.div`
	padding-inline: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

// COMPONENT DEFINITION
const placeholder = (
	<Type typescale="headlineSmall" color="onSurface">
		Headline Small
	</Type>
);

const CardText = React.forwardRef<HTMLDivElement, CardTextProps>(({ children = placeholder, ...restProps }, ref) => (
	<StyledCardText ref={ref} {...restProps}>
		{children}
	</StyledCardText>
)) as CardTextComposition;

CardText.displayName = "Card.Text";

// COMPOSITION
CardText.Headline = () => (
	<Type typescale="displaySmall" color="onSurface">
		Headline
	</Type>
);
CardText.Subhead = () => (
	<Type typescale="titleMedium" color="onSurface">
		Subhead
	</Type>
);
CardText.SupportingText = () => (
	<Type typescale="bodyMedium" color="onSurface">
		Supporting Text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam?
	</Type>
);

// EXPORTS
export default CardText;
