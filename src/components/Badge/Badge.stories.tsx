import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "./Badge";

export default {
	title: "Components/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
	count: 2,
};

export const LargeMax = Template.bind({});
LargeMax.args = {
	count: 1234,
};
export const Decimal = Template.bind({});
Decimal.args = {
	count: 3.428,
};
