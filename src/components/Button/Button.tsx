import React, { FocusEventHandler, MouseEventHandler, useEffect, useState } from "react";
import StateLayer, { StateType } from "../StateLayer";

import Typography, { ContentColorType } from "../Typography";
import { StyledButtonProps, StyledButton } from "./Button.styles";

interface ButtonProps extends StyledButtonProps {
	label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, color, disabled, variant }) => {
	const [buttonState, setButtonState] = useState<StateType>("none");

	// disabled prop also affects statelayer style. set button state to none whenever disabled is false. Button shdould not have disabled styles on state layer.
	useEffect(() => {
		!disabled && setButtonState("none");
	}, [disabled]);

	// Set buttonstate based on mouse events. Button state is passed to statelayer component.
	const handleHover: MouseEventHandler<HTMLButtonElement> = () => {
		setButtonState("hover");
	};

	const handleLeave: MouseEventHandler<HTMLButtonElement> = () => {
		setButtonState("none");
	};

	const handleFocus: FocusEventHandler<HTMLButtonElement> = () => {
		setButtonState("focus");
	};

	const handlePressed: MouseEventHandler<HTMLButtonElement> = () => {
		setButtonState("pressed");
	};

	// determine contentcolor based on variant prop
	let contentColor: ContentColorType = "onPrimary";
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
					<Typography type="labelLarge" tag="span" label={label} color={contentColor} disabled={disabled} />
				</div>
			</StateLayer>
		</StyledButton>
	);
};

Button.defaultProps = {
	label: "Click me",
	color: "primary",
	variant: "filled",
	disabled: false,
};

export default Button;
