import React from "react";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...restProps }, ref) => {
	// const id= use
	return <input ref={ref} type="button" {...restProps} />;
});

export default Input;
