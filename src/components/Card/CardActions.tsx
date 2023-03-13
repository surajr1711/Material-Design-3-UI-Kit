// IMPORTS
import React from "react";
import styled from "styled-components";
import Button from "../Button";

// TYPES
export interface CardActionsProps extends React.ComponentPropsWithRef<"div"> {
	children?: JSX.Element | JSX.Element[];
}

// STYLES
const StyledCardActions = styled.div`
	padding-inline: 1rem;
	padding-block-end: 1rem;
	display: flex;
	gap: 1rem;
`;

// COMPONENT DEFINITION
const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
	({ children = <Button />, ...restProps }, ref) => (
		<StyledCardActions ref={ref} {...restProps}>
			{children}
		</StyledCardActions>
	)
);

CardActions.displayName = "Card.Actions";

// EXPORTS
export default CardActions;
