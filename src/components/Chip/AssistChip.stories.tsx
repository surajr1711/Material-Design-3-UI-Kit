import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from "./Chip";
import { AssistChipProps, chipElevation, chipIconPosition, chipVariant } from "./Chip.types";

const AssistChip = Chip("assist");

export default {
	title: "Components/Chip/Assist",
	component: AssistChip,
	argTypes: {
		label: { control: "text" },
		elevation: { control: "radio", options: chipElevation },
		iconName: { control: "text" },
		iconPosition: { control: "radio", options: chipIconPosition },
		loading: { control: "boolean" },
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof AssistChip>;

const Template: ComponentStory<typeof AssistChip> = (args) => <AssistChip {...args} />;

export const Default = Template.bind({});
Default.args = {
	iconName: "home",
	draggable: true,
};
