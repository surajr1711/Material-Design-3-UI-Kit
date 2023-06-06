import React from "react";
import { SelectedKeys, SuggestionChipProps } from "./Chip.types";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Text from "../Text";
import { StyledSuggestionChip, suggestionChipColors } from "./SuggestionChip.styles";
import { Color } from "../../styles/colors";

const SuggestionChip = React.forwardRef<HTMLButtonElement, SuggestionChipProps>(
	(
		{
			label = "Suggestion Chip",
			elevation = "level0",
			selected = false,
			disabled = false,
			onDragStart,
			onDragEnd,
			...restProps
		},
		ref
	) => {
		// CONSTS AND STATES
		const selectedKey: SelectedKeys = selected ? "selected" : "unselected";

		// STYLES
		const labelColor: Color = disabled ? "onSurface" : suggestionChipColors.label[selectedKey];

		// EVENT HANDLERS
		const handleDragStart: React.DragEventHandler<HTMLButtonElement> = (e) => {
			// if disabled dont do anything
			if (disabled) return;
			// add a dragStart data attribute
			e.currentTarget.setAttribute("data-dragging", "dragStarted");
			// if user provides drag handler run it
			if (onDragStart) onDragStart(e);
		};

		const handleDragEnd: React.DragEventHandler<HTMLButtonElement> = (e) => {
			// if disabled dont do anything
			if (disabled) return;
			// add a dragEnd data attribute
			e.currentTarget.setAttribute("data-dragging", "dragEnded");
			// if user provides drag handler run it
			if (onDragEnd) onDragEnd(e);
		};

		return (
			<StyledSuggestionChip
				ref={ref}
				elevation={elevation}
				selected={selected}
				disabled={disabled}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				{...restProps}
			>
				<StateLayer stateLayerColor={suggestionChipColors.stateLayer[selectedKey]} />
				<ContentLayer>
					<Text color={labelColor} typescale="labelLarge" children={label} />
				</ContentLayer>
			</StyledSuggestionChip>
		);
	}
);

export default SuggestionChip;
