import React from "react";
import PropTypes from "prop-types";
import { BadgeProps, BadgeType } from "./Badge.types";
import { shapeScaleKeys } from "../../styles/shape";
import Text from "../Text";
import { StyledBadge, SmallBadge, LargeBadge, LargeMaxBadge } from "./Badge.styles";

// COMPONENT DEFINITION
const componentMap: { [T in BadgeType]: typeof StyledBadge } = {
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
	const Component = componentMap[badgeType];

	return (
		<Component ref={ref} shapeScale={shapeScale} {...restProps}>
			<Text tag="span" color="onError" typescale="labelSmall">
				{count >= 1000 ? "999+" : count > 0 ? Math.round(count) : ""}
			</Text>
		</Component>
	);
});

Badge.displayName = "Badge";

// PROPTYPES
Badge.propTypes = {
	count: PropTypes.number,
	shapeScale: PropTypes.oneOf(shapeScaleKeys),
};

export default Badge;
