import React from "react";
import { IconVariant } from "../Icon";
import {
	FilledIconButton,
	iconButtonColors,
	iconButtonLayout,
	OutlinedIconButton,
	StandardIconButton,
	StyledIconButton,
	TonalIconButton,
} from "./IconButton.styles";
import { IconButtonContentColor, IconButtonVariant } from "./IconButton.types";

const componentMap: { [T in IconButtonVariant]: typeof StyledIconButton } = {
	filled: FilledIconButton,
	tonal: TonalIconButton,
	outlined: OutlinedIconButton,
	standard: StandardIconButton,
};

export const useIconButtonStyles = (
	variant: IconButtonVariant,
	disabled: boolean,
	toggle: boolean,
	selected: boolean,
	icon: React.ReactElement
): {
	Component: typeof StyledIconButton;
	contentColor: IconButtonContentColor;
	buttonIcon: React.ReactElement;
} => {
	// Button Variant
	const Component = componentMap[variant];

	// Icon Color. If iconbutton is disabled then 'onsurface' else if not toggleable, contentColor is noToggle else apply selected/unselected styles based on select state.
	const contentColor = disabled
		? "onSurface"
		: !toggle
		? iconButtonColors[variant].icon.noToggle
		: selected
		? iconButtonColors[variant].icon.selected
		: iconButtonColors[variant].icon.unselected;

	// Icon Variant. If iconbutton is neither a toggle type nor unselected/toggledOn then icon variant is outlined else filled.
	const iconVariant: IconVariant = !toggle || !selected ? "outlined" : "filled";

	// Style the icon according to IconButton spec. Overrides props passed by user
	const buttonIcon = React.cloneElement(icon, {
		color: contentColor,
		sizeInRems: iconButtonLayout.iconSizeinRems,
		variant: iconVariant,
	});

	return {
		Component,
		contentColor,
		buttonIcon,
	};
};
