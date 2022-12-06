import React, { useState } from "react";
import PropType from "prop-types";
import uuid from "react-uuid";

import Icon from "../Icon/Icon";
import {
	StyledFilledIconButton,
	StyledTonalIconButton,
	StyledOutlinedIconButton,
	StyledStandardIconButton,
} from "./IconButton.styles";
import { useContentColor } from "./useContentColor";

const variantType = ["filled", "tonal", "outlined", "standard"] as const;
export type VariantType = typeof variantType[number];

const contentColorType = [
	"primary",
	"onPrimary",
	"onSurface",
	"onSecondaryContainer",
	"onSurfaceVariant",
	"onInverseSurface",
] as const;
export type ContentColorType = typeof contentColorType[number];

export interface IconButtonProps extends React.ComponentPropsWithoutRef<"input"> {
	icon: string;
	toggleable?: boolean;
	variant?: VariantType;
	// checked?: boolean; // for setting initial toggled state and for using controlled props
}

const IconButton = React.forwardRef<HTMLInputElement, IconButtonProps>(
	({ toggleable, icon, variant, ...props }, ref) => {
		// toggledOn state only for managing contentColor. Not for setting checked value! Leave component as uncontrolled input so that you can access checked prop through if consumer wants to access checked value in HOC.
		const [toggledOn, setToggledOn] = useState<boolean>(false);

		// use the correct icon variant based on noToggle or toggle selected/unselected
		const iconVariant: VariantType = !toggleable || !toggledOn ? "outlined" : "filled";

		// provide common id for label 'hmltFor' and input 'id'
		const [id] = useState<string>(uuid());

		// check if button should be button or checkbox type
		const type: "button" | "checkbox" = toggleable ? "checkbox" : "button";

		// if its a button or a checked checkbox color is onPrimary
		let contentColor: ContentColorType = useContentColor(variant, toggleable, toggledOn, props.disabled);

		// determine which StyledIconButton to render
		let Component: typeof StyledFilledIconButton;
		switch (variant) {
			case "tonal":
				Component = StyledTonalIconButton;
				break;
			case "outlined":
				Component = StyledOutlinedIconButton;
				break;
			case "standard":
				Component = StyledStandardIconButton;
				break;
			// filled and undefined
			default:
				Component = StyledFilledIconButton;
		}

		const handleClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
			// run user's onclick only if there IS a user provided onClick AND the button is NOT toggleable (ie regular button).
			!toggleable && props.onClick && props.onClick(e);
		};

		const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
			// if button is toggleable, first switch contentColor depending on checked prop
			toggleable && setToggledOn(!toggledOn);
			// then if user
			props.onChange && props.onChange(e);
		};

		return (
			<Component htmlFor={id} toggleable={toggleable} toggledOn={toggledOn}>
				<div data-md3role="stateLayer" />
				<div data-md3role="contentLayer">
					<input
						// default props come first they can be overrriden by prop spreading
						id={id}
						type={type}
						// prop spreading will override default props if they exist and add all props provided by consumer
						{...props}
						// props that you dont want the consumer to override are placed after prop spreading
						// put handle change after prop spreading so that user provided onChange doesnt overrride built-in handleChange which is needed to set toggledOn state which is required by contentColor
						onClick={handleClick}
						onChange={handleChange}
						// conditional prop inclusion. Add checked prop only if button is toggleable. for controlled input.
						// {...(toggleable && { checked: toggledOn })}
						ref={ref}
					/>
					<Icon sizeInRems={1.5} variant={iconVariant} color={contentColor} label={icon} />
				</div>
			</Component>
		);
	}
);

IconButton.propTypes = {
	toggleable: PropType.bool,
	variant: PropType.oneOf(variantType),
	icon: PropType.string.isRequired,
	// checked: PropType.bool,
};

IconButton.defaultProps = {
	icon: "settings",
	toggleable: false,
	variant: "filled",
	// checked: false,
};

export default IconButton;
