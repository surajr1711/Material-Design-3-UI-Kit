import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressIndicator from "./ProgressIndicator";

export default {
	title: "Components/ProgressIndicator",
	component: ProgressIndicator,
	argTypes: {
		progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
	},
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => <ProgressIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {};
