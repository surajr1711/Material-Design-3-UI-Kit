import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButton";
import { iconButtonVariant } from "./IconButton.types";

export default {
	title: "Components/IconBtn",
	component: IconButton,
	parameters: {
		actions: {
			handles: ["click"],
		},
	},
	args: {
		onClick: () => console.log("clicked"),
	},
	argTypes: {
		variant: {
			options: iconButtonVariant,
			control: { type: "radio" },
		},
		toggle: {
			control: { type: "boolean" },
		},
		selected: {
			control: { type: "boolean" },
		},
		disabled: {
			control: { type: "boolean" },
		},
		onClick: {
			table: {
				disabled: true,
			},
		},
	},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

// filled
export const Default = Template.bind({});

export const Standard = Template.bind({});
Standard.args = {
	icon: "face",
	variant: "standard",
	toggle: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	icon: "phone",
	variant: "outlined",
	toggle: true,
};

export const Tonal = Template.bind({});
Tonal.args = {
	icon: "phone",
	variant: "tonal",
};
