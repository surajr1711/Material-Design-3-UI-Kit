import React from "react";
import PropType from "prop-types";
import { ButtonProps, buttonVariant, ButtonVariant } from "./Button.types";
import {
	buttonColors,
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

const componentMap: { [T in ButtonVariant]: typeof StyledButton } = {
	filled: FilledButton,
	outlined: OutlinedButton,
	text: TextButton,
	elevated: ElevatedButton,
	tonal: TonalButton,
};

/** Buttons help people take action, such as sending an email, sharing a document, or liking a comment. */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ icon, label = "Click", variant = "filled", disabled = false, ...restProps }, ref) => {
		const text = !!label ? label : "Click";

		const Component = componentMap[variant!];
		const contentColor = disabled ? buttonColors[variant].disabled : buttonColors[variant].content;
		const elevation = buttonStateElevations[variant].enabled;

		return (
			<Component ref={ref} variant={variant} icon={icon} disabled={disabled} {...restProps}>
				{variant === "elevated" && <TintLayer elevation={elevation} />}
				<StateLayer stateLayerColor={contentColor} />
				<ContentLayer>
					{icon && (
						<Icon color={contentColor} sizeInRems={buttonLayouts.contained.iconSize}>
							{icon}
						</Icon>
					)}
					<Text color={contentColor} typescale={buttonLayouts.contained.labelTypescale}>
						{text}
					</Text>
				</ContentLayer>
			</Component>
		);
	}
);

Button.propTypes = {
	variant: PropType.oneOf(buttonVariant),
	icon: PropType.string,
	label: PropType.string,
};

export default Button;
