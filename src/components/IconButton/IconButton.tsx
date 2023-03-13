import React, { useState } from "react";
import PropType from "prop-types";
import uuid from "react-uuid";

import Icon from "../Icon/Icon";
import { useIconButtonContentColor } from "./useIconButtonContentColor";
import { useIconButtonVariant } from "./useIconButtonVariant";
import { IconButtonVariant, iconButtonVariant } from "./IconButton.types";

export interface IconButtonProps extends React.ComponentPropsWithoutRef<"input"> {
	icon: string;
	toggleable?: boolean;
	variant?: IconButtonVariant;
}

const IconButton = React.forwardRef<HTMLInputElement, IconButtonProps>(
	({ toggleable, icon, variant, ...props }, ref) => {
		// toggledOn state only for managing contentColor. Not for setting checked value! Leave component as uncontrolled input so that you can access checked prop through if consumer wants to access checked value in HOC.
		const [toggledOn, setToggledOn] = useState<boolean>(false);

		// use the correct icon variant based on noToggle or toggle selected/unselected
		const iconVariant: IconButtonVariant = !toggleable || !toggledOn ? "outlined" : "filled";

		// provide common id for label 'hmltFor' and input 'id'
		const [id] = useState<string>(uuid());

		// check if button should be button or checkbox type
		const type: "button" | "checkbox" = toggleable ? "checkbox" : "button";

		// if its a button or a checked checkbox color is onPrimary
		const contentColor = useIconButtonContentColor(variant, toggleable, toggledOn, props.disabled);

		// determine which StyledIconButton to render
		const Component = useIconButtonVariant(variant);

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
					<Icon sizeInRems={1.5} variant={iconVariant} color={contentColor}>
						{icon}
					</Icon>
				</div>
			</Component>
		);
	}
);

IconButton.propTypes = {
	toggleable: PropType.bool,
	variant: PropType.oneOf(iconButtonVariant),
	icon: PropType.string.isRequired,
};

IconButton.defaultProps = {
	icon: "settings",
	toggleable: false,
	variant: "filled",
};

export default IconButton;
