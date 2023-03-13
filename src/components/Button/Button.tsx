// IMPORTS
import React from "react";
import PropType from "prop-types";
import Typography from "../Type";
import Icon from "../Icon";
import { useButtonContentColor } from "./useButtonContentColor";
import { buttonColor, ButtonProps, buttonVariant, ButtonVariant } from "./Button.types";
import { ElevatedButton, FilledButton, OutlinedButton, StyledButton, TextButton, TonalButton } from "./Button.styles";

// COMOPNENT DEFINITION
const componentMap: { [T in ButtonVariant]: typeof StyledButton } = {
	filled: FilledButton,
	outlined: OutlinedButton,
	text: TextButton,
	elevated: ElevatedButton,
	tonal: TonalButton,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ label = "Click me", color = "primary", variant = "filled", md3icon, ...props }, ref) => {
		// get content color
		const contentColor = useButtonContentColor(variant!, color!, props.disabled!);

		// get correct styled button variant
		const Component = componentMap[variant!];

		return (
			<Component ref={ref} variant={variant} color={color} stateLayerColor={contentColor} {...props}>
				{variant === "elevated" && <div data-md3role="surfaceTint" />}
				<div data-md3role="stateLayer" />
				<div data-md3role="contentLayer">
					{md3icon && (
						<Icon color={contentColor} sizeInRems={1.125}>
							{md3icon}
						</Icon>
					)}
					<Typography typescale="labelLarge" tag="span" color={contentColor}>
						{label || "Click me"}
					</Typography>
				</div>
			</Component>
		);
	}
);

// PROPTYPES
Button.propTypes = {
	label: PropType.string,
	color: PropType.oneOf(buttonColor),
	variant: PropType.oneOf(buttonVariant),
	md3icon: PropType.string,
};

export default Button;
