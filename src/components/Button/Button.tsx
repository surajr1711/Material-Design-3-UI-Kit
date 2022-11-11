import React, { FocusEventHandler, MouseEventHandler, useState } from "react";

import StateLayer, { StateType } from "../StateLayer";
import Typography, { ContentColorType } from "../Typography";
import { StyledButtonProps, StyledButton } from "./Button.styles";
import Icon from "../Icon";

interface ButtonProps extends StyledButtonProps {
	label?: string;
	icon?: string | undefined;
}

const Button: React.FC<ButtonProps> = ({ label, color, disabled, variant, icon }) => {
	// button state is for passing value to statelayer so that it can set its opacity accordingly
	const [buttonState, setButtonState] = useState<StateType>("enabled");

	// disabled prop also affects statelayer style and contentcolor.
	let contentColor: ContentColorType = "onPrimary";

	// if disabled prop is set or is equalt to true then set contentColor to onSurface
	if (disabled === true) {
		contentColor = "onSurface";
	}
	// else disabled prop is false and contentColor will be according to button variant prop
	else {
		if (variant === "filled") {
			// example: convert color primary to onPrimary
			contentColor = `on${color!.charAt(0).toUpperCase() + color!.slice(1)}` as ContentColorType;
		} else if (variant === "outlined" || variant === "text" || variant === "elevated") {
			// example: textcolor is primary
			contentColor = color!;
		} else {
			// tonal variant: textColor is onContainer. example: onPrimaryContainer
			contentColor = `on${color!.charAt(0).toUpperCase() + color!.slice(1)}Container` as ContentColorType;
		}
	}

	// Set buttonstate based on mouse events. Button state is passed to statelayer component.
	const handleHover: MouseEventHandler<HTMLButtonElement> = () => {
		setButtonState("hover");
	};
	// onmouseleave, statelayer opacity depends on the disabled prop.
	const handleLeave: MouseEventHandler<HTMLButtonElement> = () => {
		disabled ? setButtonState("disabled") : setButtonState("enabled");
	};
	const handleFocus: FocusEventHandler<HTMLButtonElement> = () => {
		setButtonState("focus");
	};

	const handlePressed: MouseEventHandler<HTMLButtonElement> = () => {
		setButtonState("pressed");
	};

	return (
		<StyledButton
			onMouseEnter={handleHover}
			onMouseLeave={handleLeave}
			onFocus={handleFocus}
			onMouseDown={handlePressed}
			onMouseUp={handleHover}
			disabled={disabled}
			variant={variant}
			color={color}
		>
			<StateLayer state={buttonState} color={contentColor}>
				<div className="contentLayer">
					{icon && <Icon label={icon} color={contentColor} sizeInRems={1.125} disabled={disabled} />}
					<Typography typescale="labelLarge" tag="span" label={label} color={contentColor} disabled={disabled} />
				</div>
			</StateLayer>
		</StyledButton>
	);
};

Button.defaultProps = {
	label: "Click me",
	color: "primary",
	variant: "filled",
	icon: undefined,
	disabled: false,
};

export default Button;
