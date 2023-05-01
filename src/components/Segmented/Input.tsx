import React from "react";
import styled from "styled-components";
export interface InputProps extends React.ComponentPropsWithRef<"input"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...restProps }, ref) => {
	// const id= use
	return <input ref={ref} {...restProps} />;
});

export const SegInput = styled(Input)`
	// remove the radio circle and checkbox square
	appearance: none;
	// remove input from flow of content
	position: absolute;
`;

export default Input;
