import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip from "./Chip";
import { chipElevation } from "./Chip.types";

const FilterChip = Chip("filter");

export default {
	title: "Components/Chip/Filter",
	component: FilterChip,
	parameters: {
		actions: {
			handles: ["click"],
		},
	},
	argTypes: {
		label: { control: "text" },
		elevation: { control: "radio", options: chipElevation },
		iconName: { control: "text" },
		selected: { control: "boolean" },
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = (args) => <FilterChip {...args} />;

export const Default = Template.bind({});
Default.args = {};
