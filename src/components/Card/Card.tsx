// IMPORTS
// Packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Types
import { CardComposition, CardProps, CardStateStyles, CardType, cardType } from "./Card.types";
import { State, stateKeys } from "../../styles/interactionStates";
// Custom Components
import InteractionTemplate from "../InteractionTemplate/InteractionTemplate";
// Styles
import {
	ElevatedCard,
	elevatedCardStateStyles,
	FilledCard,
	filledCardStateStyles,
	OutlinedCard,
	outlinedCardStateStyles,
	StyledCard,
} from "./Card.styles";
import CardContent from "./CardContent";

// COMOPNENT DEFINITION
const cardComponentMap: { [T in CardType]: typeof StyledCard } = {
	elevated: ElevatedCard,
	filled: FilledCard,
	outlined: OutlinedCard,
};
const cardStylesMap: { [T in CardType]: CardStateStyles } = {
	elevated: elevatedCardStateStyles,
	filled: filledCardStateStyles,
	outlined: outlinedCardStateStyles,
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ children = <CardContent />, type = "elevated", state = "enabled", ...restProps }, ref) => {
		const [cardState, setCardState] = useState<State>(state);

		useEffect(() => {
			setCardState(state);
			// console.log("state changed");
		}, [state]);

		const handleMouseEnter = () => {
			if (cardState === "disabled") return;
			// console.log("mouseenter");
			setCardState("hover");
			// if (restProps.onMouseEnter) onMouseEnter();
		};
		const handleMouseLeave = () => {
			if (cardState === "disabled") return;
			// console.log("mouseleave");
			setCardState("enabled");
		};
		const handleMouseDown = () => {
			if (cardState === "disabled") return;
			// console.log("mousedown");
			setCardState("pressed");
		};
		const handleMouseUp = () => {
			if (cardState === "disabled") return;
			// console.log("mouseup");
			setCardState("hover");
		};
		const handleDragStart = () => {
			if (cardState === "disabled") return;
			// console.log("dragstart");
			if (restProps.draggable) setCardState("dragged");
		};
		const handleDragEnd = () => {
			if (cardState === "disabled") return;
			// console.log("dragend");
			setCardState("hover");
		};
		const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
			if (cardState === "disabled") return;
			console.log("hello from built-in handleClick");
			if (restProps.onClick) restProps.onClick(e);
		};

		// render correct card type and pass correct cardstatestyles to interaction template
		const CardComponent = cardComponentMap[type];
		const { elevation, stateLayerColor } = cardStylesMap[type][cardState];

		return (
			<CardComponent
				ref={ref}
				state={cardState}
				{...restProps}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				onClick={handleClick}
			>
				<InteractionTemplate elevation={elevation} state={cardState} stateLayerColor={stateLayerColor}>
					{children}
				</InteractionTemplate>
			</CardComponent>
		);
	}
) as CardComposition;

// CARD COMPOSITION
Card.Content = CardContent;

// PROPTYPES
Card.propTypes = {
	children: PropTypes.element,
	type: PropTypes.oneOf(cardType),
	state: PropTypes.oneOf(stateKeys),
};

export default Card;
