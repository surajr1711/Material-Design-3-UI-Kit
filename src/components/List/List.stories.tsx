import { Meta, StoryObj } from "@storybook/react";
import List from "./List";

const meta: Meta<typeof List> = {
	title: "Components/List",
	component: List,
};
export default meta;

type Story = StoryObj<typeof List>;

/** A list is super important */
export const Default: Story = {
	args: {},
};
