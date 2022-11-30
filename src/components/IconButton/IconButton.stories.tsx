import { ComponentMeta, ComponentStory } from "@storybook/react";
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

export const Default = Template.bind({});

export const OnClick = Template.bind({});
OnClick.args = {
	variant: "tonal",
	onClick: () => alert("You clicked me"),
};
