import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
		actions: {
			handles: ["click"],
		},
	},
	argTypes: {
		label: { control: "text" },
		icon: { control: "text" },
		disabled: { control: "boolean" },
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: "Primary",
	},
};

export const Outlined: Story = {
	args: {
		variant: "outlined",
		label: "Outlined",
		icon: "add",
	},
};

export const TextButton: Story = {
	args: {
		variant: "text",
		label: "Text",
	},
};

export const Elevated: Story = {
	args: {
		variant: "elevated",
		label: "Elevated",
	},
};

export const Tonal: Story = {
	args: {
		variant: "tonal",
		icon: "phone",
		label: "Call",
	},
};
