// IMPORTS
import React from "react";
import styled from "styled-components";

// TYPES
export interface CardMediaProps extends React.ComponentPropsWithRef<"div"> {
	children?: JSX.Element;
}

// STYLES
const StyledCardMedia = styled.div`
	border-radius: 0.5rem;
	overflow: hidden;
`;

// COMPONENT DEFINITION
const Placeholder = styled.div`
	background-color: ${(props) => props.theme.color.primaryContainer};
	width: 16rem;
	aspect-ratio: 16/9;
`;

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
	({ children = <Placeholder />, ...restProps }, ref) => (
		<StyledCardMedia ref={ref} {...restProps}>
			{children}
		</StyledCardMedia>
	)
);

CardMedia.displayName = "Card.Media";

// EXPORTS
export default CardMedia;
