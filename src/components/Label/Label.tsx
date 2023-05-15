import React from "react";

export interface LabelProps extends React.ComponentPropsWithRef<"label"> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, ...restProps }, ref) => {
	// const id= use
	return (
		<label ref={ref} {...restProps}>
			{children}
		</label>
	);
});

export default Label;
