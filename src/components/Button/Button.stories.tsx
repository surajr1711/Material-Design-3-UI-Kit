import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
	label: "Outlined",
	variant: "outlined",
	color: "primary",
};

export const Text = Template.bind({});
Text.args = {
	label: "Text Button",
	variant: "text",
};

export const Elevated = Template.bind({});
Elevated.args = {
	label: "Elevated",
	variant: "elevated",
};

export const Tonal = Template.bind({});
Tonal.args = {
	label: "Tonal Button",
	variant: "tonal",
};

export const IconButton = Template.bind({});
IconButton.args = {
	label: "Add to cart",
	icon: "add",
	variant: "outlined",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: "Secondary",
// 	color: "secondary",
// };
// export const Error = Template.bind({});
// Error.args = {
// 	label: "Error",
// 	color: "error",
// };
