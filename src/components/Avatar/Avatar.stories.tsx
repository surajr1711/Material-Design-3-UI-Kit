import { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./Avatar";
import { shapeScaleKeys } from "../../styles/shape";

export default {
	title: "Components/Avatar",
	component: Avatar,
	argTypes: {
		sizeInRems: { control: "number" },
		shapeScale: { control: "select", options: shapeScaleKeys },
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
