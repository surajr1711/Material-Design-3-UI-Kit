import React, { useContext } from "react";
import { LabelProps } from "./SegButton.types";
import { SegButtonContext } from "./SegButtonContext";

// COMPONENT DEFINITION
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, ...restProps }, ref) => {
	const id = useContext(SegButtonContext);
	return (
		<label htmlFor={id} {...restProps} ref={ref}>
			<div data-md3role="contentLayer">{children}</div>
		</label>
	);
});

Label.displayName = "SegButton.Label";

export default Label;
