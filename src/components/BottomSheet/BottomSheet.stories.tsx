import { ComponentMeta, ComponentStory } from "@storybook/react";
import BottomSheet from "./BottomSheet";

export default {
	title: "Components/BottomSheet",
	component: BottomSheet,
	// parameters: {
	// 	layout: "centered",
	// },
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = (args) => <BottomSheet {...args} />;

export const Default = Template.bind({});
