import React, { useEffect } from "react";
import PropType from "prop-types";
import { CardProps, CardType, cardType } from "./Card.types";
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
import {
	cardColors,
	cardStateElevations,
	ElevatedCard,
	FilledCard,
	OutlinedCard,
	StyledCardProps,
} from "./Card.styles";
import { useInteractionHandlers } from "../InteractionTemplate/useInteractionHandlers";
import { placeholder } from "./Card.stubs";

// COMPONENT DEFINITION
const componentMap: { [T in CardType]: React.FC<StyledCardProps> } = {
	elevated: ElevatedCard,
	filled: FilledCard,
	outlined: OutlinedCard,
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(
		{
			children = placeholder,
			type = "elevated",
			disabled = false,
			onMouseEnter,
			onMouseLeave,
			onMouseDown,
			onMouseUp,
			onFocus,
			onDragStart,
			onDragEnd,
			onClick,
			...restProps
		},
		ref
	) => {
		const { interactionState, setInteractionState, eventHandlers } = useInteractionHandlers(
			disabled ? "disabled" : "enabled",
			{
				onMouseEnter,
				onMouseLeave,
				onMouseDown,
				onMouseUp,
				onFocus,
				onDragStart,
				onDragEnd,
			}
		);

		useEffect(() => {
			disabled ? setInteractionState("disabled") : setInteractionState("enabled");
			// console.log("state changed");
		}, [disabled, setInteractionState]);

		const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
			if (disabled) return;
			if (onClick) onClick(e);
		};

		// CARD STYLING
		const Component = componentMap[type];
		const elevation = cardStateElevations[type][interactionState];
		const stateLayerColor = cardColors[type].stateLayer;

		return (
			<Component ref={ref} type={type} state={interactionState} onClick={handleClick} {...eventHandlers} {...restProps}>
				<InteractionTemplate elevation={elevation} state={interactionState} stateLayerColor={stateLayerColor}>
					{children}
				</InteractionTemplate>
			</Component>
		);
	}
);

// PROPTYPES
Card.propTypes = {
	children: PropType.element,
	type: PropType.oneOf(cardType),
};

export default Card;
