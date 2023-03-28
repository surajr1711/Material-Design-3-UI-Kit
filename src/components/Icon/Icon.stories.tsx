import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
	title: "Components/Icon",
	component: Icon,
	parameters: {
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<div style={{ height: "5rem", width: "5rem", border: "1px solid black" }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
