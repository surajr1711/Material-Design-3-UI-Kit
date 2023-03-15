import React, { useContext } from "react";
import Icon from "../Icon";
import { IconProps } from "../Icon/Icon.types";
import { FabContextObj } from "./Fab.types";
import { FabContext } from "./FabContext";

const FabIcon = React.forwardRef<HTMLSpanElement, IconProps>(
	({ children = "home", color = "onPrimary", sizeInRems = 1, ...restProps }, ref) => {
		// use fabcontext. get color and size
		const { color: fabIconColor, sizeInRems: fabIconSize }: FabContextObj = useContext(FabContext);

		return (
			<Icon ref={ref} color={fabIconColor || color} sizeInRems={fabIconSize || sizeInRems} {...restProps}>
				{children}
			</Icon>
		);
	}
);

export default FabIcon;
