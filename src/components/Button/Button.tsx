import React from "react";
import PropType from "prop-types";

import { StyledButton } from "./Button.styles";
import Typography, { ContentColorType } from "../Typography";
import Icon from "../Icon";

const colorType = ["primary", "secondary", "tertiary", "error"] as const;
export type ColorType = typeof colorType[number];

const variantType = ["filled", "outlined", "text", "elevated", "tonal"] as const;
export type VariantType = typeof variantType[number];

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	color?: ColorType;
	variant?: VariantType;
	label?: string;
	md3icon?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ label, color, variant, md3icon, ...props }, ref) => {
	let contentColor: ContentColorType = "onPrimary";
	// if disabled prop is set or is equalt to true then set contentColor to onSurface
	if (props.disabled === true) {
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

	return (
		<StyledButton ref={ref} variant={variant} color={color} stateLayerColor={contentColor} {...props}>
			{variant === "elevated" && <div data-md3role="surfaceTint" />}
			<div data-md3role="stateLayer" />
			<div data-md3role="contentLayer">
				{md3icon && <Icon label={md3icon} color={contentColor} sizeInRems={1.125} />}
				<Typography typescale="labelLarge" tag="span" label={label || "Click me"} color={contentColor} />
			</div>
		</StyledButton>
	);
});

Button.propTypes = {
	label: PropType.string,
	color: PropType.oneOf(colorType),
	variant: PropType.oneOf(variantType),
	md3icon: PropType.string,
};

Button.defaultProps = {
	label: "Click me",
	color: "primary",
	variant: "filled",
};

export default Button;
