import { ComponentMeta, ComponentStory } from "@storybook/react";
import FAB from "./FAB";

export default {
	title: "Components/FAB",
	component: FAB,
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: (e) => console.log("Hello", e.target),
	},
} as ComponentMeta<typeof FAB>;

const Template: ComponentStory<typeof FAB> = (args) => <FAB {...args} />;

export const Default = Template.bind({});

export const SmallTertiary = Template.bind({});
SmallTertiary.args = {
	color: "tertiary",
	size: "smallFAB",
	icon: "add",
};

export const LargeSurface = Template.bind({});
LargeSurface.args = {
	color: "surface",
	size: "largeFAB",
	icon: "palette",
};

export const ExtendedSecondary = Template.bind({});
ExtendedSecondary.args = {
	color: "secondary",
	size: "extendedFAB",
	icon: "view_in_ar",
	label: "View in AR",
};
