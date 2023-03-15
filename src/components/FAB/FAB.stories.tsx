import { ComponentMeta, ComponentStory } from "@storybook/react";
import Fab from "./Fab";
// import { fabIconProps, fabLabelProps } from "./Fab.styles";

export default {
	title: "Components/Fab",
	component: Fab,
	parameters: {
		layout: "centered",
	},
	args: {
		onMouseEnter: (e) => console.log(e.target, e.type),
		onMouseLeave: (e) => console.log(e.target, e.type),
		onClick: (e) => console.log(e.target, e.type),
		onFocus: (e) => console.log(e.target, e.type),
	},
	subcomponents: {
		icon: Fab.Icon,
	},
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {
	disabled: true,
};

export const SmallTertiary = Template.bind({});
SmallTertiary.args = {
	children: <Fab.Icon>add</Fab.Icon>,
	color: "tertiary",
	size: "smallFab",
};

export const LargeSurface = Template.bind({});
LargeSurface.args = {
	children: <Fab.Icon>palette</Fab.Icon>,
	color: "surface",
	size: "largeFab",
};
