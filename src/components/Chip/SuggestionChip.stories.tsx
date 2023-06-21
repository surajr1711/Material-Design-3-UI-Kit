import { ComponentMeta, ComponentStory } from "@storybook/react";
import { chipElevation } from "./Chip.types";
import Chip from "./Chip";

const SuggestionChip = Chip("suggestion");

export default {
	title: "Components/Chip/SuggestionChip",
	component: SuggestionChip,
	parameters: {
		actions: {
			handles: ["click"],
		},
	},
	args: {
		selected: false,
	},
	argTypes: {
		label: { control: "text" },
		elevation: { control: "radio", options: chipElevation },
		selected: { control: "boolean" },
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof SuggestionChip>;

const Template: ComponentStory<typeof SuggestionChip> = (args) => <SuggestionChip {...args} />;

export const Default = Template.bind({});
Default.args = {};
