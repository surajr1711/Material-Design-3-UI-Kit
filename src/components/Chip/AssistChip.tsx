import React from "react";
import { AssistChipProps } from "./Chip.types";
import { AssistChipContentWrapper, StyledAssistChip, assistChipColors, chipLayout } from "./AssistChip.styles";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";

const AssistChip = React.forwardRef<HTMLButtonElement, AssistChipProps>(
	(
		{
			label = "Assist Chip",
			elevation = "level0",
			iconName,
			iconPosition = "leading",
			loading = false,
			disabled = false,
			onDragStart,
			onDragEnd,
			...restProps
		},
		ref
	) => {
		const showIcon = !!iconName;
		const iconColor: keyof typeof assistChipColors.icon = disabled ? "disabled" : "enabled";

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
			<StyledAssistChip
				ref={ref}
				elevation={elevation}
				iconName={iconName}
				iconPosition={iconPosition}
				loading={!!loading}
				disabled={disabled}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				{...restProps}
			>
				<StateLayer stateLayerColor={assistChipColors.stateLayer} />
				<ContentLayer>
					<AssistChipContentWrapper>
						{showIcon && (
							<Icon sizeInRems={chipLayout.iconSize} color={assistChipColors.icon[iconColor]} children={iconName} />
						)}
						<Text typescale={chipLayout.labelSize} color={assistChipColors.label} children={label} />
					</AssistChipContentWrapper>
				</ContentLayer>
			</StyledAssistChip>
		);
	}
);

export default AssistChip;
