import React from "react";
import PropType from "prop-types";
import { DividerComponentProps, DividerOrientation, dividerOrientation, dividerWidth } from "./Divider.types";
import { HorizontalDivider, StyledDividerProps, VerticalDivider } from "./Divider.styles";

const componentMap: { [T in DividerOrientation]: React.FC<StyledDividerProps> } = {
	horizontal: HorizontalDivider,
	vertical: VerticalDivider,
};

const Divider = React.forwardRef<HTMLHRElement, DividerComponentProps>(
	({ width = "inset", orientation = "horizontal", ...restprops }, ref) => {
		const Component = componentMap[orientation];
		return <Component ref={ref} width={width} role="seperator" aria-orientation={orientation} {...restprops} />;
	}
);

Divider.displayName = "Divider";

Divider.propTypes = {
	width: PropType.oneOf(dividerWidth),
	orientation: PropType.oneOf(dividerOrientation),
};

export default Divider;
