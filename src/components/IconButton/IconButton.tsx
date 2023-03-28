import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import InteractionTemplate from "../InteractionTemplate";
import { useInteractionHandlers } from "../InteractionTemplate/useInteractionHandlers";
import { IconButtonProps, iconButtonVariant } from "./IconButton.types";
import { useIconButtonStyles } from "./useIconButtonStyles";
import Icon from "../Icon";

// COMPONENT DEFINITION
const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			icon = <Icon children="edit" />,
			render = true,
			variant = "filled",
			toggle = false,
			selected: initialSelected = false,
			disabled = false,
			onMouseEnter,
			onMouseLeave,
			onMouseDown,
			onMouseUp,
			onFocus,
			onClick,
			...restProps
		},
		ref
	) => {
		// Interaction State
		const { interactionState, setInteractionState, eventHandlers } = useInteractionHandlers(
			disabled ? "disabled" : "enabled",
			{
				onMouseEnter,
				onMouseLeave,
				onMouseDown,
				onMouseUp,
				onFocus,
			}
		);

		// Selected state
		const [selected, setSelected] = useState<boolean>(initialSelected);

		useEffect(() => {
			setSelected(initialSelected);
		}, [initialSelected]);

		useEffect(() => {
			disabled ? setInteractionState("disabled") : setInteractionState("enabled");
		}, [disabled, setInteractionState]);

		const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
			if (disabled) return;
			if (toggle) setSelected((prevSelected) => !prevSelected);
			if (onClick) onClick(e);
		};

		// COMPONENT STYLES
		const { Component, contentColor, buttonIcon } = useIconButtonStyles(variant, disabled, toggle, selected, icon);

		// RENDER
		if (!render) return null;
		return (
			<Component
				ref={ref}
				variant={variant}
				disabled={disabled}
				toggle={toggle}
				selected={selected}
				onClick={handleClick}
				{...eventHandlers}
				{...restProps}
			>
				<InteractionTemplate elevation="level0" state={interactionState} stateLayerColor={contentColor}>
					{buttonIcon}
				</InteractionTemplate>
			</Component>
		);
	}
);

IconButton.displayName = "IconButton";

IconButton.propTypes = {
	icon: PropType.element.isRequired,
	render: PropType.bool,
	variant: PropType.oneOf(iconButtonVariant),
	toggle: PropType.bool,
	selected: PropType.bool,
};

export default IconButton;
