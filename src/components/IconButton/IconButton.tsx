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
// type IconButtonType = "filled" | "tonal" | "outlined" | "standard";

interface IconButtonProps {
	toggleable: boolean;
	icon?: string;
	disabled?: boolean;
	type?: IconButtonType;
}

const IconButton: React.FC<IconButtonProps> = ({ toggleable, icon, disabled, type }) => {
	const [toggledOn, setToggledOn] = useState<boolean>(false);

	// use the correct icon variant based on noToggle or toggle selected/unselected
	const iconVariant: IconVariantType = !toggleable || !toggledOn ? "outlined" : "filled";

	// determine which StyledIconButton to render and which contentColor to be passed to icon
	type StyledIconButtonComponentType = typeof StyledFilledIconButton;
	let Component: StyledIconButtonComponentType;
	let contentColor: IconButtonContentColorType;
	if (!type || type === "filled") {
		Component = StyledFilledIconButton;
		contentColor = !toggleable || toggledOn ? "onPrimary" : "primary";
	} else if (type === "tonal") {
		Component = StyledTonalIconButton;
		contentColor = !toggleable || toggledOn ? "onSecondaryContainer" : "onSurfaceVariant";
	} else if (type === "outlined") {
		Component = StyledOutlinedIconButton;
		contentColor = !toggleable || !toggledOn ? "onSurfaceVariant" : "onInverseSurface";
	} else {
		Component = StyledStandardIconButton;
		contentColor = !toggleable || !toggledOn ? "onSurfaceVariant" : "primary";
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
		<Component toggleable={toggleable} toggledOn={toggledOn} onClick={handleClick} disabled={disabled}>
			<div className="contentLayer">
				<Icon sizeInRems={1.5} variant={iconVariant} color={contentColor} label={icon} disabled={disabled} />
			</div>
		</Component>
	);
};

IconButton.defaultProps = {
	toggleable: false,
	icon: "settings",
	disabled: false,
	type: "filled",
};

export default IconButton;
