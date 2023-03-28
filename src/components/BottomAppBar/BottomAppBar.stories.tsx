import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled, { css } from "styled-components";
import DeviceTemplate from "../../styles/DeviceTemplate";
import BottomAppBar from "./BottomAppBar";
import { fourIconButtons, oneIconButton, twoIconButtons } from "./bottomAppBarStubs";

export default {
	title: "Components/BottomAppBar",
	component: BottomAppBar,
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof BottomAppBar>;

// simply a wrapper to position its comopnents at the bottom
const BottomPositionWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

// Bottom navigation
const BottomNavigation = styled.div(
	({ theme }) => css`
		height: 1.25rem;
		background-color: ${theme.color.surface};
		position: relative;
		bottom: 0;
		// Surface Tone
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background-color: ${theme.color.surfaceTint};
			opacity: ${theme.elevation.surfaceTintOpacity.level2};
		}
		// pill
		&::after {
			content: "";
			position: absolute;
			left: calc(50% - 2.25rem);
			bottom: 0.5rem;
			width: 4.5rem;
			height: 0.125rem;
			background-color: ${theme.color.onSurface};
			border-radius: 0.5rem;
		}
	`
);

const Template: ComponentStory<typeof BottomAppBar> = (args) => <BottomAppBar {...args} />;

const PhoneTemplate: ComponentStory<typeof BottomAppBar> = (args) => (
	<DeviceTemplate>
		<BottomPositionWrapper>
			<BottomAppBar {...args} />
			<BottomNavigation />
		</BottomPositionWrapper>
	</DeviceTemplate>
);

export const Default = Template.bind({});
Default.args = {
	iconButtons: twoIconButtons,
};

export const WithPhoneTemplate = PhoneTemplate.bind({});
WithPhoneTemplate.args = {
	iconButtons: twoIconButtons,
};

export const WithFAB = Template.bind({});
WithFAB.args = {
	fab: {
		icon: "create",
		tooltip: "Create",
	},
};

export const FourIcons = Template.bind({});
FourIcons.args = {
	iconButtons: fourIconButtons,
};

export const NotEnoughIcons = Template.bind({});
NotEnoughIcons.args = {
	iconButtons: oneIconButton,
};
