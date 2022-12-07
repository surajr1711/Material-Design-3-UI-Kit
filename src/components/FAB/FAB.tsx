import React from "react";
import PropType from "prop-types";

import { elevationType, Elevation } from "../../styles/theme";
import Icon from "../Icon";
import Typography from "../Typography";
import { useFABColors } from "./useFABColors";
import { useFABSizes } from "./useFABSizes";

const colorType = ["primary", "secondary", "tertiary", "surface"] as const;
export type ColorType = typeof colorType[number];

const contentColorType = ["onPrimaryContainer", "primary", "onSecondaryContainer", "onTertiaryContainer"] as const;
export type ContentColorType = typeof contentColorType[number];

const bgColorType = ["primaryContainer", "surface", "secondaryContainer", "tertiaryContainer"] as const;
export type BgColorType = typeof bgColorType[number];

const sizeType = ["FAB", "smallFAB", "largeFAB", "extendedFAB"] as const;
export type SizeType = typeof sizeType[number];

export interface FABProps {
	icon?: string;
	color?: ColorType;
	size?: SizeType;
	tooltip?: string;
	label?: string;
	elevation?: Elevation;
}

const FAB: React.FC<FABProps> = ({ icon, color, size, tooltip, label, elevation }) => {
	// Content color to be passed to Icon component and styledfab for :before statelayer
	const { bgColor, contentColor } = useFABColors(color!);

	// determine which StyledFAB and iconSize accordingly to render
	const { Component, iconSize } = useFABSizes(size!);

	return (
		<Component bgColor={bgColor} contentColor={contentColor} tooltip={tooltip} elevation={elevation}>
			<div data-md3role="surfaceTint" />
			<div data-md3role="stateLayer" />
			<div data-md3role="contentLayer">
				<Icon label={icon} sizeInRems={iconSize} color={contentColor} />
				{size === "extendedFAB" && label && label !== "" && (
					<Typography label={label} tag="span" color={contentColor} typescale="labelLarge" />
				)}
			</div>
		</Component>
	);
};

FAB.propTypes = {
	icon: PropType.string,
	color: PropType.oneOf(colorType),
	size: PropType.oneOf(sizeType),
	tooltip: PropType.string,
	label: PropType.string,
	elevation: PropType.oneOf(elevationType),
};

FAB.defaultProps = {
	icon: "create",
	color: "primary",
	size: "FAB",
	tooltip: "",
	label: "Compose",
	elevation: 3,
};

export default FAB;
