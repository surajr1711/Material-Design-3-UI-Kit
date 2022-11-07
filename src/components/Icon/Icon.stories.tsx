import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
	title: "Components/Icon",
	component: Icon,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "home",
};
