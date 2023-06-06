import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from "./Chip";
import avatar from "./avatar.webp";

const InputChip = Chip("input");

export default {
	title: "Components/Chip/InputChip",
	component: InputChip,
	args: {
		selected: false,
		onDelete: () => console.log("deleted"),
	},
	argTypes: {
		label: { control: "text" },
		iconName: { control: "text" },
		disabled: { control: "boolean" },
		draggable: { control: "boolean" },
		showDeleteIcon: { control: "boolean" },
		avatar: { table: { disable: true } },
		onDelete: { table: { disable: true } },
	},
} as ComponentMeta<typeof InputChip>;

const Template: ComponentStory<typeof InputChip> = (args) => <InputChip {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
	iconName: "image",
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
	avatar: avatar,
};

export const WithoutDeleteIcon = Template.bind({});
WithoutDeleteIcon.args = {
	showDeleteIcon: false,
};
