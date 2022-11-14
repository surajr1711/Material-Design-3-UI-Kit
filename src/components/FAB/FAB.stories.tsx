import { ComponentMeta, ComponentStory } from "@storybook/react";
import FAB from "./FAB";

export default {
	title: "Components/FAB",
	component: FAB,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof FAB>;

const Template: ComponentStory<typeof FAB> = (args) => <FAB {...args} />;

export const Default = Template.bind({});
