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
	(
		{
			children = placeholder,
			type = "elevated",
			disabled = false,
			stateLayer = true,
			onDragStart,
			onDragEnd,
			...restProps
		},
		ref
	) => {
		// CARD STYLING
		const Component = componentMap[type];
		const stateLayerColor = cardColors[type].stateLayer;

		const handleDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
			// if disabled dont do anything
			if (disabled) return;
			// add a dragStart data attribute
			e.currentTarget.setAttribute("data-dragging", "dragStarted");
			// if user provides drag handler run it
			if (onDragStart) onDragStart(e);
		};

		const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (e) => {
			// if disabled dont do anything
			if (disabled) return;
			// add a dragEnd data attribute
			e.currentTarget.setAttribute("data-dragging", "dragEnded");
			// if user provides drag handler run it
			if (onDragEnd) onDragEnd(e);
		};

		return (
			<Component
				ref={ref}
				type={type}
				disabled={disabled}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				{...restProps}
			>
				<>{(stateLayer || restProps.draggable) && <StateLayer stateLayerColor={stateLayerColor} />}</>
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
