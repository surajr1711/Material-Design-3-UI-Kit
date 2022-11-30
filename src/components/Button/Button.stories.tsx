import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		disabled: { control: "boolean" },
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

export const WithIcon = Template.bind({});
WithIcon.args = {
	label: "",
	md3icon: "add",
	variant: "outlined",
};

export const OnClick = Template.bind({});
OnClick.args = {
	variant: "tonal",
	onClick: () => alert("You clicked me"),
};
