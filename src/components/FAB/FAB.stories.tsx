import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "../Icon";
import Fab from "./Fab";
// import { fabIconProps, fabLabelProps } from "./Fab.styles";

export default {
	title: "Components/Fab",
	component: Fab,
	parameters: {
		layout: "centered",
	},
	args: {
		// onMouseEnter: (e) => console.log(e.target, e.type),
		// onMouseLeave: (e) => console.log(e.target, e.type),
		// onMouseDown: (e) => console.log(e.target, e.type),
		// onMouseUp: (e) => console.log(e.target, e.type),
		// onClick: (e) => console.log(e.target, e.type),
		// onFocus: (e) => console.log(e.target, e.type),
	},
	argTypes: {
		disabled: { table: { disable: true } },
		icon: { table: { disable: true } },
	},
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {
	// disabled: true,
};

export const SmallTertiary = Template.bind({});
SmallTertiary.args = {
	color: "tertiary",
	size: "smallFab",
	icon: <Icon>phone</Icon>,
};

export const LargeSurface = Template.bind({});
LargeSurface.args = {
	icon: <Icon>message</Icon>,
	color: "surface",
	size: "largeFab",
};
