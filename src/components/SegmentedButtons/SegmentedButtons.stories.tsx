import { ComponentMeta, ComponentStory } from "@storybook/react";
import SegmentedButtons from "./SegmentedButtons";
import { densityKeys } from "./SegmentedButtons.types";
import { calendarOptions, commuteOptions, multiOptions } from "./segmentedButtons.stubs";

export default {
	title: "Components/SegmentedButtons",
	component: SegmentedButtons,
	// subcomponents: { input: SegButton.Input, label: SegButton.Label },
	parameters: {
		layout: "centered",
		actions: {
			handles: ["click"],
		},
	},
	argTypes: {
		density: { control: "radio", options: densityKeys },
		options: { table: { disable: true } },
	},
} as ComponentMeta<typeof SegmentedButtons>;

const Template: ComponentStory<typeof SegmentedButtons> = (args) => <SegmentedButtons {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
	buttonsType: "multiSelect",
	options: multiOptions,
};

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
	showIconOrLabel: "onlyLabel",
	options: calendarOptions,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
	showIconOrLabel: "onlyIcon",
	options: commuteOptions,
};
