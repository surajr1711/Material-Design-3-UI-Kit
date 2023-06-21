import { ComponentMeta, ComponentStory } from "@storybook/react";
// import Icon from "../Icon";
import Fab from "./Fab";
// import { fabIconProps, fabLabelProps } from "./Fab.styles";

export default {
	title: "Components/Fab",
	component: Fab,
	parameters: {
		layout: "centered",
		actions: {
			handles: ["click"],
		},
	},
	args: {},
	argTypes: {
		disabled: { table: { disable: true } },
		icon: { table: { disable: true } },
	},
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const SmallTertiary = Template.bind({});
SmallTertiary.args = {
	color: "tertiary",
	size: "smallFab",
	icon: "phone",
};

export const LargeSurface = Template.bind({});
LargeSurface.args = {
	icon: "message",
	color: "surface",
	size: "largeFab",
};
