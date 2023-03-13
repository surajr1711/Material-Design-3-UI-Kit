// IMPORTS
// 3rd party packages
import React, { useContext } from "react";
// Types
import { SegButtonContext } from "./SegButtonContext";

// TYPES
export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

// COMPONENT DEFINITION
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const id = useContext(SegButtonContext);

	return <input type="radio" id={id} {...props} ref={ref} />;
});

Input.displayName = "SegButton.Input";

export default Input;
