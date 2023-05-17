import React from "react";
import PropType from "prop-types";
import { CardProps, CardType, cardType } from "./Card.types";
import { cardColors, ElevatedCard, FilledCard, OutlinedCard, StyledCardProps } from "./Card.styles";
import { placeholder } from "./Card.stubs";
import { ContentLayer, StateLayer } from "../InteractionLayers";

// COMPONENT DEFINITION
const componentMap: { [T in CardType]: React.FC<StyledCardProps> } = {
	elevated: ElevatedCard,
	filled: FilledCard,
	outlined: OutlinedCard,
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ children = placeholder, type = "elevated", disabled = false, stateLayer = false, ...restProps }, ref) => {
		// CARD STYLING
		const Component = componentMap[type];
		const stateLayerColor = cardColors[type].stateLayer;

		return (
			<Component ref={ref} type={type} disabled={disabled} {...restProps}>
				<>{stateLayer && <StateLayer stateLayerColor={stateLayerColor} />}</>
				<ContentLayer>{children}</ContentLayer>
			</Component>
		);
	}
);

// PROPTYPES
Card.propTypes = {
	children: PropType.element,
	type: PropType.oneOf(cardType),
	disabled: PropType.bool,
	stateLayer: PropType.bool,
};

export default Card;
