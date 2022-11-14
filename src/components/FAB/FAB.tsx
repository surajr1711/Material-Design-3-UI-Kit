import React from "react";
import { AccentColorType } from "../../styles/theme";

import Icon from "../Icon";
import { StyledFAB, StyledSmallFAB, StyledLargeFAB, FABContentColorType, FABBackgroundColorType } from "./FAB.styles";

export type FABColorType = AccentColorType | "surface";
export type FABSizeType = "FAB" | "smallFAB" | "largeFAB";

interface FABProps {
	icon?: string;
	color?: FABColorType;
	size?: FABSizeType;
	tooltip?: string;
}

const FAB: React.FC<FABProps> = ({ icon, color, size, tooltip }) => {
	let fabBackgroundColor: FABBackgroundColorType;
	// Content color to be passed to Icon component and styledfab for :before statelayer
	let fabContentColor: FABContentColorType;

	if (!color || color === "primary") {
		fabBackgroundColor = "primaryContainer";
		fabContentColor = "onPrimaryContainer";
	} else if (color === "surface") {
		fabBackgroundColor = "surface";
		fabContentColor = "primary";
	} else if (color === "secondary") {
		fabBackgroundColor = "secondaryContainer";
		fabContentColor = "onSecondaryContainer";
	} else {
		fabBackgroundColor = "tertiaryContainer";
		fabContentColor = "onTertiaryContainer";
	}

	const DefaultFAB = (
		<StyledFAB backgroundColor={fabBackgroundColor} contentColor={fabContentColor} tooltip={tooltip}>
			<div className="contentLayer">
				<Icon label={icon} sizeInRems={1.5} color={fabContentColor} />
			</div>
		</StyledFAB>
	);

	const SmallFAB = (
		<StyledSmallFAB backgroundColor={fabBackgroundColor} contentColor={fabContentColor} tooltip={tooltip}>
			<div className="contentLayer">
				<Icon label={icon} sizeInRems={1.5} color={fabContentColor} />
			</div>
		</StyledSmallFAB>
	);

	const LargeFAB = (
		<StyledLargeFAB backgroundColor={fabBackgroundColor} contentColor={fabContentColor} tooltip={tooltip}>
			<div className="contentLayer">
				<Icon label={icon} sizeInRems={2.25} color={fabContentColor} />
			</div>
		</StyledLargeFAB>
	);

	type RenderSwitchType = (size: FABSizeType) => React.ReactNode;
	const renderSwitch: RenderSwitchType = (size) => {
		switch (size) {
			case "smallFAB":
				return SmallFAB;
			case "largeFAB":
				return LargeFAB;
			default:
				return DefaultFAB;
		}
	};

	return <>{renderSwitch(size!)}</>;
};

FAB.defaultProps = {
	icon: "create",
	color: "primary",
	size: "FAB",
	tooltip: "",
};

export default FAB;
