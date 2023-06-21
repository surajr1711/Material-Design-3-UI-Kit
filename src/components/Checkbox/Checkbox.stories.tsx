import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from "./Checkbox";
import { checkboxState } from "./Checkbox.types";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		actions: {
			handles: ["click"],
		},
	},
	argTypes: {
		checkboxState: { control: "radio", options: checkboxState },
		disabled: { control: "boolean" },
		error: { control: "boolean" },
		ref: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
	error: true,
	label: "Call Susan",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	checkboxState: "indeterminate",
	label: "Buy groceries",
};
