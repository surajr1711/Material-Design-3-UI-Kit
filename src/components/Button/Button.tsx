import React from "react";
import PropType from "prop-types";

import Typography from "../Typography";
import Icon from "../Icon";
import { useButtonContentColor } from "./useButtonContentColor";
import { buttonColor, ButtonColor, buttonVariant, ButtonVariant } from "./Button.types";
import { useButtonVariant } from "./useButtonVariant";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	color?: ButtonColor;
	variant?: ButtonVariant;
	label?: string;
	md3icon?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ label, color, variant, md3icon, ...props }, ref) => {
	// get content color
	const contentColor = useButtonContentColor(variant!, color!, props.disabled!);

	// get correct styled button variant
	const Component = useButtonVariant(variant!);

	return (
		<Component ref={ref} variant={variant} color={color} stateLayerColor={contentColor} {...props}>
			{variant === "elevated" && <div data-md3role="surfaceTint" />}
			<div data-md3role="stateLayer" />
			<div data-md3role="contentLayer">
				{md3icon && <Icon label={md3icon} color={contentColor} sizeInRems={1.125} />}
				<Typography typescale="labelLarge" tag="span" label={label || "Click me"} color={contentColor} />
			</div>
		</Component>
	);
});

Button.propTypes = {
	label: PropType.string,
	color: PropType.oneOf(buttonColor),
	variant: PropType.oneOf(buttonVariant),
	md3icon: PropType.string,
};

Button.defaultProps = {
	label: "Click me",
	color: "primary",
	variant: "filled",
};

export default Button;
