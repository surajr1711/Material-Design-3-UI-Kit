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
		onClick: {},
		onChange: {},
	},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

export const Toggleable = Template.bind({});
Toggleable.args = {
	toggleable: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	toggleable: true,
	variant: "outlined",
};

export const Tonal = Template.bind({});
Tonal.args = {
	toggleable: true,
	variant: "tonal",
};

export const Standard = Template.bind({});
Standard.args = {
	toggleable: true,
	variant: "standard",
};
