// IMPORTS
import React from "react";
import PropTypes from "prop-types";
// Types
import { BadgeProps, BadgeType } from "./Badge.types";
import { shapeScaleKeys } from "../../styles/shape";
// Custom components
import Typography from "../Type";
// Styles
import { StyledBadge, SmallBadge, LargeBadge, LargeMaxBadge } from "./Badge.styles";

// COMPONENT DEFINITION
const badgeComponentMap: { [T in BadgeType]: typeof StyledBadge } = {
	small: SmallBadge,
	large: LargeBadge,
	largeMax: LargeMaxBadge,
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ count = 0, shapeScale = "full", ...restProps }, ref) => {
	// Determine badge style based on count
	let badgeType: BadgeType;

	if (count <= 0) {
		badgeType = "small";
	} else if (count > 0 && count <= 9) {
		badgeType = "large";
	} else {
		badgeType = "largeMax";
	}

	// render correct badge type component
	const BadgeComponent = badgeComponentMap[badgeType];

	return (
		<BadgeComponent ref={ref} shapeScale={shapeScale} {...restProps}>
			<Typography tag="span" color="onError" typescale="labelSmall">
				{count >= 1000 ? "999+" : count > 0 ? Math.round(count) : ""}
			</Typography>
		</BadgeComponent>
	);
});

Badge.displayName = "Badge";

// PROPTYPES
Badge.propTypes = {
	count: PropTypes.number,
	shapeScale: PropTypes.oneOf(shapeScaleKeys),
};

// EXPORTS
export default Badge;
