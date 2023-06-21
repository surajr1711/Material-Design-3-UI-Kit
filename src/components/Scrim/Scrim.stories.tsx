import { ComponentMeta, ComponentStory } from "@storybook/react";
import Scrim from "./Scrim";

export default {
	title: "Components/Scrim",
	component: Scrim,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		opacity: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
	},
} as ComponentMeta<typeof Scrim>;

const Template: ComponentStory<typeof Scrim> = (args) => <Scrim {...args} />;

export const Default = Template.bind({});
