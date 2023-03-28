import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "../Icon";
import IconButton from "./IconButton";
import { iconButtonVariant } from "./IconButton.types";

export default {
	title: "Components/IconBTN",
	component: IconButton,
	argTypes: {
		icon: {
			table: {
				disable: true,
			},
		},
		variant: {
			options: iconButtonVariant,
			control: { type: "select" }, // Automatically inferred when 'options' is defined
		},
		disabled: {
			control: { type: "boolean" },
		},
		toggle: {
			control: { type: "boolean" },
		},
		selected: {
			control: { type: "boolean" },
		},
	},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	icon: <Icon children="face" />,
	variant: "filled",
	toggle: false,
	selected: false,
	disabled: false,
};
export const StandardToggle = Template.bind({});
StandardToggle.args = {
	icon: <Icon children="settings" />,
	variant: "standard",
	toggle: true,
	selected: false,
	disabled: false,
};
