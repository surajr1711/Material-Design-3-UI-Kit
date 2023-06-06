import React, { useEffect, useState } from "react";
import { FilterChipProps, SelectedKeys } from "./Chip.types";
import Text from "../Text";
import { chipLayout } from "./AssistChip.styles";
import {
	FilterChipColors,
	// FilterChipContentWrapper,
	StyledFilterChip,
	filterChipColors,
} from "./FiterChip.styles";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import Icon from "../Icon/Icon";

const FilterChip = React.forwardRef<HTMLButtonElement, FilterChipProps>(
	(
		{
			label = "Filter Chip",
			iconName,
			elevation = "level0",
			selected = false,
			disabled = false,
			onClick,
			...restProps
		},
		ref
	) => {
		const [selectedState, setSelectedState] = useState<boolean>(selected);

		useEffect(() => {
			setSelectedState(selected);
		}, [selected]);

		const selectedKey: SelectedKeys = selectedState ? "selected" : "unselected";
		const showIcon = !!iconName;
		const icon = selectedState ? "check" : iconName;

		const disabledColor = "onSurface";
		const stateLayerColor = disabled ? disabledColor : filterChipColors.stateLayer[selectedKey];
		const iconColor = disabled ? disabledColor : filterChipColors.icon[selectedKey];
		const labelColor = disabled ? disabledColor : filterChipColors.label[selectedKey];

		// onclick toggle state
		const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
			if (disabled) return;
			setSelectedState((prevSelected) => !prevSelected);
			if (onClick) onClick(e);
		};

		return (
			<StyledFilterChip
				ref={ref}
				selected={selectedState}
				elevation={elevation}
				iconName={iconName}
				disabled={disabled}
				onClick={handleClick}
				{...restProps}
			>
				<StateLayer stateLayerColor={stateLayerColor} />
				<ContentLayer>
					{/* <FilterChipContentWrapper> */}
					{(selectedState || showIcon) && <Icon sizeInRems={chipLayout.iconSize} color={iconColor} children={icon} />}
					<Text typescale={chipLayout.labelSize} color={labelColor} children={label} />
					{/* </FilterChipContentWrapper> */}
				</ContentLayer>
			</StyledFilterChip>
		);
	}
);

export default FilterChip;
