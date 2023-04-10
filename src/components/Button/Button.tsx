import React from "react";
import PropType from "prop-types";
import { ButtonProps, buttonVariant, ButtonVariant } from "./Button.types";
import {
	buttonColors,
	ButtonContent,
	buttonLayouts,
	buttonStateElevations,
	ElevatedButton,
	FilledButton,
	OutlinedButton,
	StyledButton,
	TextButton,
	TonalButton,
} from "./Button.styles";
import Text from "../Text";
import Icon from "../Icon/Icon";
import { TintLayer, StateLayer, ContentLayer } from "../InteractionLayers";

// COMOPNENT DEFINITION
const componentMap: { [T in ButtonVariant]: typeof StyledButton } = {
	filled: FilledButton,
	outlined: OutlinedButton,
	text: TextButton,
	elevated: ElevatedButton,
	tonal: TonalButton,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			icon,
			label = "Click me",
			// label = <Text>Click me</Text>,
			variant = "filled",
			disabled = false,
			...restProps
		},
		ref
	) => {
		// STYLES
		const Component = componentMap[variant!];
		const contentColor = disabled ? buttonColors[variant].disabled : buttonColors[variant].content;
		const elevation = buttonStateElevations[variant].enabled;

		/* // Icon and label defaults
	icon =
		icon &&
		React.cloneElement(icon, {
			color: contentColor as IconContentColor,
			sizeInRems: buttonLayouts.contained.iconSize,
		});

	label =
		label &&
		React.cloneElement(label, {
			color: contentColor,
			typescale: buttonLayouts.contained.labelTypescale,
		}); */

		return (
			<Component ref={ref} variant={variant} icon={icon} disabled={disabled} {...restProps}>
				{variant === "elevated" && <TintLayer elevation={elevation} />}
				<StateLayer stateLayerColor={contentColor} />
				<ContentLayer>
					<ButtonContent>
						{icon && (
							<Icon color={contentColor} sizeInRems={buttonLayouts.contained.iconSize}>
								{icon}
							</Icon>
						)}
						<Text color={contentColor} typescale={buttonLayouts.contained.labelTypescale}>
							{label}
						</Text>
						{/* {icon}
					{label} */}
					</ButtonContent>
				</ContentLayer>
			</Component>
		);
	}
);

// PROPTYPES
Button.propTypes = {
	variant: PropType.oneOf(buttonVariant),
	icon: PropType.string,
	label: PropType.string,
	// icon: PropType.element,
	// label: PropType.element,
};

export default Button;
