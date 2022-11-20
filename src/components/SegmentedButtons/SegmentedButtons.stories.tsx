import { ComponentMeta, ComponentStory } from "@storybook/react";

import SegmentedButtons from "./SegmentedButtons";
import { optionsStub } from "../../stubs/segmentedButtons";

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
	buttonsType: "singleSelect",
	options: optionsStub,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
	buttonsType: "multiSelect",
	options: optionsStub,
	showIcon: true,
};
/*
const StyledDiv = styled.div(
	({ theme }) => css`
		background-color: ${theme.color.error};
		height: 2.5rem;
		padding-inline: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5rem;
	`
);
export const LessOrMoreOptions: ComponentStory<typeof SegmentedButtons> = (args) => (
	<StyledDiv>
		<SegmentedButtons {...args} />
	</StyledDiv>
);
LessOrMoreOptions.args = {
	name: "Options",
	options: [{ id: "option1", label: "Option 1" }],
};

export const DefaultCheckedSingleSelect = Template.bind({});
DefaultCheckedSingleSelect.args = {
	options: optionsWithDefaultChecked,
};

export const DefaultCheckedMultiSelect = Template.bind({});
DefaultCheckedMultiSelect.args = {
	buttonsType: "multiSelect",
	options: optionsWithDefaultChecked,
}; */
