import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExtendedFab from "./ExtendedFab";
// import { fabIconProps, fabLabelProps } from "./Fab.styles";

export default {
	title: "Components/ExtendedFab",
	component: ExtendedFab,
	parameters: {
		layout: "centered",
	},
	args: {
		// onClick: (e) => console.log("Hello", e.target),
	},
	subcomponents: {
		icon: ExtendedFab.Icon,
	},
} as ComponentMeta<typeof ExtendedFab>;

const Template: ComponentStory<typeof ExtendedFab> = (args) => <ExtendedFab {...args} />;

export const Default = Template.bind({});
Default.args = {
	disabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	children: (
		<ExtendedFab.Wrapper>
			<ExtendedFab.Icon>add</ExtendedFab.Icon>
			<ExtendedFab.Label>Click to add</ExtendedFab.Label>
		</ExtendedFab.Wrapper>
	),
	color: "tertiary",
};

export const Surface = Template.bind({});
Surface.args = {
	children: (
		<ExtendedFab.Wrapper>
			<ExtendedFab.Icon>palette</ExtendedFab.Icon>
			<ExtendedFab.Label>Select brush</ExtendedFab.Label>
		</ExtendedFab.Wrapper>
	),
	color: "surface",
};
