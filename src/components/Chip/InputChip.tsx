import React from "react";
import { InputChipProps, SelectedKeys } from "./Chip.types";
import { StyledInputChip, inputChipColors } from "./InputChip.styles";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { chipLayout } from "./AssistChip.styles";
import { Color } from "../../styles/colors";
import { Avatar } from "../Avatar";

const InputChip = React.forwardRef<HTMLButtonElement, InputChipProps>(
	(
		{
			label = "Input Chip",
			iconName,
			avatar,
			showDeleteIcon = true,
			selected = false,
			disabled = false,
			onDragStart,
			onDragEnd,
			onDelete,
			...restProps
		},
		ref
	) => {
		// CONSTS AND STATES
		const selectedKey: SelectedKeys = selected ? "selected" : "unselected";
		// show avatar if it is defined
		const showAvatar: boolean = !!avatar;
		// show icon if avatar is undefined AND there is an iconName
		const showIcon: boolean = !!iconName && !showAvatar;

		// STYLES
		const iconColor: Color = disabled ? "onSurface" : inputChipColors.icon[selectedKey];
		const deleteIconColor: Color = disabled ? "onSurface" : inputChipColors.deleteIcon[selectedKey];
		const labelColor: Color = disabled ? "onSurface" : inputChipColors.label[selectedKey];

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
			<StyledInputChip
				ref={ref}
				avatar={avatar}
				iconName={iconName}
				showDeleteIcon={showDeleteIcon}
				selected={selected}
				disabled={disabled}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				{...restProps}
			>
				<StateLayer stateLayerColor={inputChipColors.stateLayer[selectedKey]} />
				<ContentLayer>
					{showAvatar && <Avatar src={avatar} sizeInRems={chipLayout.avatarSize} disabled={disabled} />}
					{showIcon && <Icon children={iconName} color={iconColor} sizeInRems={chipLayout.iconSize} />}

					<Text children={label} typescale="labelLarge" color={labelColor} />

					{showDeleteIcon && (
						<Icon children="close" color={deleteIconColor} sizeInRems={chipLayout.iconSize} onClick={onDelete} />
					)}
				</ContentLayer>
			</StyledInputChip>
		);
	}
);

export default InputChip;
