import { ComponentMeta, ComponentStory } from "@storybook/react";
import SegmentedButtons from "./SegmentedButtons";
import { densityKeys } from "./SegmentedButtons.types";

export default {
	title: "Components/NewSegmentedButtons",
	component: SegmentedButtons,
	// subcomponents: { input: SegButton.Input, label: SegButton.Label },
	parameters: {
		layout: "centered",
	},
	argTypes: {
		density: { control: "radio", options: densityKeys },
		options: { table: { disable: true } },
	},
} as ComponentMeta<typeof SegmentedButtons>;

const Template: ComponentStory<typeof SegmentedButtons> = (args) => <SegmentedButtons {...args} />;

export const Default = Template.bind({});
Default.args = {};
