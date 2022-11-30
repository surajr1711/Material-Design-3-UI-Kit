import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import { IconVariantType } from "../Icon/Icon.styles";

import {
	StyledFilledIconButton,
	StyledTonalIconButton,
	StyledOutlinedIconButton,
	StyledStandardIconButton,
	IconButtonContentColorType,
} from "./IconButton.styles";

type IconButtonType = "filled" | "tonal" | "outlined" | "standard";

export interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	icon: string;
	variant?: IconButtonType;
	toggleable?: boolean;
	// disabled?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	({ toggleable, icon, variant, ...props }, ref) => {
		const [toggledOn, setToggledOn] = useState<boolean>(false);

		// use the correct icon variant based on noToggle or toggle selected/unselected
		const iconVariant: IconVariantType = !toggleable || !toggledOn ? "outlined" : "filled";

		// determine which StyledIconButton to render and which contentColor to be passed to icon
		// variant StyledIconButtonComponentType = typeof StyledFilledIconButton;
		let Component: typeof StyledFilledIconButton;
		let contentColor: IconButtonContentColorType;
		if (!variant || variant === "filled") {
			Component = StyledFilledIconButton;
			contentColor = !toggleable || toggledOn ? "onPrimary" : "primary";
		} else if (variant === "tonal") {
			Component = StyledTonalIconButton;
			contentColor = !toggleable || toggledOn ? "onSecondaryContainer" : "onSurfaceVariant";
		} else if (variant === "outlined") {
			Component = StyledOutlinedIconButton;
			contentColor = !toggleable || !toggledOn ? "onSurfaceVariant" : "onInverseSurface";
		} else {
			Component = StyledStandardIconButton;
			contentColor = !toggleable || !toggledOn ? "onSurfaceVariant" : "primary";
		}

		if (props.disabled === true) {
			contentColor = "onSurface";
		}

		// to change toggledon back to false when toggleable is set to false
		useEffect(() => {
			!toggleable && setToggledOn(false);
		}, [toggleable]);

		// if button is toggleable, switch styles between toggleselected and toggleUnselected
		const handleClick: React.MouseEventHandler = () => {
			toggleable && setToggledOn(!toggledOn);
		};

		return (
			<Component ref={ref} toggleable={toggleable} toggledOn={toggledOn} onClick={handleClick} {...props}>
				<div data-md3role="stateLayer" />
				<div data-md3role="contentLayer">
					<Icon sizeInRems={1.5} variant={iconVariant} color={contentColor} label={icon} />
				</div>
			</Component>
		);
	}
);

IconButton.defaultProps = {
	icon: "settings",
	variant: "filled",
	toggleable: false,
	// disabled: false,
};

export default IconButton;
