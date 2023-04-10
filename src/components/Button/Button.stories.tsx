import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
// import Text from "../Text";
// import Icon from "../Icon";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		label: { control: "string" },
		icon: { control: "string" },
		disabled: { control: "boolean" },
		onClick: {},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Default",
};

export const Outlined = Template.bind({});
Outlined.args = {
	variant: "outlined",
	label: "Outlined",
	icon: "add",
};

export const TextButton = Template.bind({});
TextButton.args = {
	variant: "text",
	label: "Text",
};

export const Elevated = Template.bind({});
Elevated.args = {
	variant: "elevated",
	label: "Elevated",
};

export const Tonal = Template.bind({});
Tonal.args = {
	variant: "tonal",
	icon: "phone",
	label: "Call",
};

export const OnClick = Template.bind({});
OnClick.args = {
	variant: "outlined",
	onClick: (e) => console.log("You clicked me", e.currentTarget),
};
