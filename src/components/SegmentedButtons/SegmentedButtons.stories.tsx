import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SegmentedButtonsOptions } from "../../stubs/segmentedButtonsOptions";
import SegmentedButtons from "./SegmentedButtons";

export default {
	title: "Components/SegmentedButtons",
	component: SegmentedButtons,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof SegmentedButtons>;

const Template: ComponentStory<typeof SegmentedButtons> = (args) => <SegmentedButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
	options: SegmentedButtonsOptions,
};

export const NoOptions = Template.bind({});
NoOptions.args = {
	options: [{ label: "Option 1" }],
};
