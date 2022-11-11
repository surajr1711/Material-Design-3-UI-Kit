import React from "react";

import Typography from "../Typography";
import { BadgeType, StyledBadge } from "./Badge.styles";

interface BadgeProps {
	label?: number | undefined;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
	// Determine badge style by label. If label exists or is single digit or 4 digits.
	let badgeType: BadgeType;

	// if undefined or negative, set label to 0
	if (!label || label < 0) label = 0;

	// else remove decimals
	label = Math.round(label);

	if (label <= 0) {
		badgeType = "small";
	} else {
		if (label > 0 && label <= 9) {
			badgeType = "large";
		} else {
			badgeType = "largeMax";
		}
	}

	return (
		<StyledBadge badgeType={badgeType}>
			{label !== 0 && (
				<Typography tag="span" color="onError" label={label >= 1000 ? "999+" : label} typescale="labelSmall" />
			)}
		</StyledBadge>
	);
};

export default Badge;

Badge.defaultProps = {
	label: undefined,
};
