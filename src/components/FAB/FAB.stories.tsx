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
		// onClick: (e) => console.log("Hello", e.target),
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

// export const ExtendedSecondary = Template.bind({});
// ExtendedSecondary.args = {
// 	color: "secondary",
// 	size: "extendedFab",
// 	children: (
// 		// <Fab.Wrapper>
// 		<>
// 			<Fab.Icon>view_in_ar</Fab.Icon>
// 			<Fab.Label>This is a label</Fab.Label>
// 		</>
// 		// </Fab.Wrapper>
// 	),
// };
