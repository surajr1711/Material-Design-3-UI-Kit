import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import Icon from "../Icon";
import { ContentLayer, StateLayer } from "../InteractionLayers";
import { IconButtonProps, iconButtonVariant } from "./IconButton.types";
import { useIconButtonStyles } from "./useIconButtonStyles";

// COMPONENT DEFINITION
const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			icon = "settings",
			variant = "filled",
			toggle = false,
			selected: initialSelected = false,
			disabled = false,
			onClick,
			...restProps
		},
		ref
	) => {
		const [selected, setSelected] = useState<boolean>(initialSelected);

		useEffect(() => {
			setSelected(initialSelected);
		}, [initialSelected]);

		const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
			if (disabled) return;
			if (toggle) setSelected((prevSelected) => !prevSelected);
			if (onClick) onClick(e);
		};

		// STYLES
		const { Component, contentColor, iconVariant } = useIconButtonStyles(variant, toggle, selected, disabled);

		return (
			<Component
				variant={variant}
				toggle={toggle}
				selected={selected}
				disabled={disabled}
				onClick={handleClick}
				{...restProps}
			>
				<StateLayer stateLayerColor={contentColor} />
				<ContentLayer>
					<Icon color={contentColor} variant={iconVariant}>
						{icon}
					</Icon>
				</ContentLayer>
			</Component>
		);
	}
);

IconButton.propTypes = {
	icon: PropType.string,
	variant: PropType.oneOf(iconButtonVariant),
	toggle: PropType.bool,
	selected: PropType.bool,
};

export default IconButton;
