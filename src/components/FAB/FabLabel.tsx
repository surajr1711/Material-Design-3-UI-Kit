import React, { useContext } from "react";
import Type from "../Type";
import { TypeProps } from "../Type/Type.types";
import { FabContextObj } from "./Fab.types";
import { FabContext } from "./FabContext";

const FabLabel = React.forwardRef<HTMLSpanElement, TypeProps>(
	({ children = "Default Label", color = "onPrimary", typescale = "labelLarge", ...restProps }, ref) => {
		// use fabcontext. get color and size
		const { color: fabLabelColor }: FabContextObj = useContext(FabContext);

		return (
			<Type
				// ref={ref}
				typescale="labelLarge"
				color={fabLabelColor || color}
				{...restProps}
			>
				{children}
			</Type>
		);
	}
);

export default FabLabel;
