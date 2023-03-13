// IMPORTS
// 3rd party packages
import React from "react";
import styled from "styled-components";
// Custom Components
import CardActions from "./CardActions";
import CardMedia from "./CardMedia";
import CardText from "./CardText";

// TYPES
export interface CardContentProps extends React.ComponentPropsWithRef<"div"> {
	children?: JSX.Element | JSX.Element[];
}
export interface CardContentComposition
	extends React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>> {
	Media: typeof CardMedia;
	Text: typeof CardText;
	Actions: typeof CardActions;
}

// STYLES
const StyledCardContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

// COMPONENT DEFINITION
const placeholder = (
	<>
		<CardMedia />
		<CardText />
		<CardActions />
	</>
);

// React.FC<CardContentProps> & CardContentComposition
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
	({ children = placeholder, ...restProps }, ref) => (
		<StyledCardContent ref={ref} {...restProps}>
			{children}
		</StyledCardContent>
	)
) as CardContentComposition;

CardContent.displayName = "Card.Content";

// COMPOSITION
CardContent.Media = CardMedia;
CardContent.Text = CardText;
CardContent.Actions = CardActions;

// EXPORTS
export default CardContent;
