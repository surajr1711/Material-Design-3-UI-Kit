import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import IconButton from "./IconButton";

export default {
	title: "Components/IconButton",
	component: IconButton,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default: ComponentStory<typeof IconButton> = (args) => {
	const myRef = useRef<HTMLInputElement>(null);
	// const [toggledState, setToggledState] = useState<boolean>(myRef.current?.checked || false);

	const handleClick = (e: MouseEvent) => {
		console.log("onClick: ", e.currentTarget);
		// alert("You clicked me!");
	};

	const handleChange = (e: ChangeEvent) => {
		// setToggledState(myRef.current?.checked || false);
		console.log("onChange: e.currentTarget = ", e.currentTarget);
		console.log("onChange: Consuming component ref = ", myRef.current?.checked);
		// console.log("onChange: Consuming component state = ", toggledState);
	};

	return (
		// <div style={{ padding: "2rem", backgroundColor: toggledState ? "lightpink" : "lightblue" }}>
		<IconButton ref={myRef} onChange={handleChange} onClick={handleClick} {...args} />
		// </div>
	);
};
