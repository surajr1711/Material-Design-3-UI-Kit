import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import { IconVariantType } from "../Icon/Icon.styles";

import {
	StyledFilledIconButton,
	StyledTonalIconButton,
	IconButtonBackgroundColorType,
	IconButtonContentColorType,
} from "./IconButton.styles";

type IconButtonType = "filled" | "tonal";
// type IconButtonType = "filled" | "tonal" | "outlined" | "standard";

type IconButtonStylesType = {
	backgroundColor: IconButtonBackgroundColorType;
	contentColor: IconButtonContentColorType;
	iconVariant?: IconVariantType;
};

type IconButtonStylesObjType = {
	[key in IconButtonType]: {
		[key: string]: IconButtonStylesType;
	};
};

const iconButtonStylesObj: IconButtonStylesObjType = {
	filled: {
		noToggle: {
			backgroundColor: "primary",
			contentColor: "onPrimary",
			iconVariant: "outlined",
		},
		toggleSelected: {
			backgroundColor: "primary",
			contentColor: "onPrimary",
			iconVariant: "filled",
		},
		toggleUnselected: {
			backgroundColor: "surfaceVariant",
			contentColor: "primary",
			iconVariant: "outlined",
		},
	},
	tonal: {
		noToggle: {
			backgroundColor: "secondaryContainer",
			contentColor: "onSecondaryContainer",
			iconVariant: "outlined",
		},
		toggleSelected: {
			backgroundColor: "secondaryContainer",
			contentColor: "onSecondaryContainer",
			iconVariant: "filled",
		},
		toggleUnselected: {
			backgroundColor: "surfaceVariant",
			contentColor: "onSurfaceVariant",
			iconVariant: "outlined",
		},
	},
	// outlined: {},
	// standard: {},
};

interface IconButtonProps {
	toggleable: boolean;
	icon?: string;
	disabled?: boolean;
	type?: IconButtonType;
}

const IconButton: React.FC<IconButtonProps> = ({ toggleable, icon, disabled, type }) => {
	const [toggledOn, setToggledOn] = useState<boolean>(false);

	const iconVariant: IconVariantType = !toggleable || !toggledOn ? "outlined" : "filled";

	let contentColor: IconButtonContentColorType;
	if (!type || type === "filled") {
		contentColor = !toggleable || toggledOn ? "onPrimary" : "primary";
	} else {
		contentColor = !toggleable || toggledOn ? "onSecondaryContainer" : "onSurfaceVariant";
	}

	// to change toggledon back to false when toggleable is set to false
	useEffect(() => {
		!toggleable && setToggledOn(false);
	}, [toggleable]);

	// if button is toggleable, switch styles between toggleselected and toggleUnselected
	const handleClick: React.MouseEventHandler = () => {
		toggleable && setToggledOn(!toggledOn);
	};

	const renderSwitch = (type: IconButtonType): React.ReactNode => {
		switch (type) {
			case "tonal":
				return TonalIconButton;
			default:
				return FilledIconButton;
		}
	};

	const FilledIconButton = (
		<StyledFilledIconButton toggleable={toggleable} toggledOn={toggledOn} onClick={handleClick} disabled={disabled}>
			<div className="contentLayer">
				<Icon sizeInRems={1.5} variant={iconVariant} color={contentColor} label={icon} disabled={disabled} />
			</div>
		</StyledFilledIconButton>
	);

	const TonalIconButton = (
		<StyledTonalIconButton toggleable={toggleable} toggledOn={toggledOn} onClick={handleClick} disabled={disabled}>
			<div className="contentLayer">
				<Icon sizeInRems={1.5} variant={iconVariant} color={contentColor} label={icon} disabled={disabled} />
			</div>
		</StyledTonalIconButton>
	);

	return <>{renderSwitch(type!)}</>;
};

IconButton.defaultProps = {
	toggleable: false,
	icon: "settings",
	disabled: false,
	type: "filled",
};

export default IconButton;
