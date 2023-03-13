import React, { useContext } from "react";
import Icon from "../Icon";
import { IconProps } from "../Icon/Icon.types";
import { FabContentStyles } from "./Fab.styles";
import { FabContext } from "./FabContext";

// export interface FabIconProps extends IconProps {}

const FabIcon = React.forwardRef<HTMLSpanElement, IconProps>(
	({ children = "home", color = "onPrimary", sizeInRems = 1, ...restProps }, ref) => {
		// use fabcontext. get color and size
		const { color: fabIconColor, sizeInRems: fabIconSize }: FabContentStyles = useContext(FabContext);
		return (
			<Icon ref={ref} color={fabIconColor || color} sizeInRems={fabIconSize || sizeInRems} {...restProps}>
				{children}
			</Icon>
		);
	}
);

export default FabIcon;
