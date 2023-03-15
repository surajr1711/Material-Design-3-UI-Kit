import { ComponentMeta, ComponentStory } from "@storybook/react";
import DeviceTemplate from "../../styles/DeviceTemplate";
// import DeviceTemplate from "../../styles/DeviceTemplate";
import ExtendedFab from "./ExtendedFab";

export default {
	title: "Components/ExtendedFab",
	component: ExtendedFab,
	args: {
		// onMouseEnter: (e) => console.log(e.target, e.type),
		// onMouseLeave: (e) => console.log(e.target, e.type),
		// onClick: (e) => console.log(e.target, e.type),
		// onFocus: (e) => console.log(e.target, e.type),
	},
	subcomponents: {
		icon: ExtendedFab.Icon,
		label: ExtendedFab.Label,
		wrapper: ExtendedFab.Wrapper,
	},
	// decorators: [
	// 	(Story) => (
	// 		<DeviceTemplate>
	// 			<Story />
	// 		</DeviceTemplate>
	// 	),
	// ],
} as ComponentMeta<typeof ExtendedFab>;

const Template: ComponentStory<typeof ExtendedFab> = (args) => <ExtendedFab {...args} />;

export const Default = Template.bind({});
Default.args = {
	disabled: true,
};

export const TertiaryWithoutIcon = Template.bind({});
TertiaryWithoutIcon.args = {
	children: (
		<ExtendedFab.Wrapper>
			<ExtendedFab.Icon render={false}>add</ExtendedFab.Icon>
			<ExtendedFab.Label>Click to add</ExtendedFab.Label>
		</ExtendedFab.Wrapper>
	),
	color: "tertiary",
};

export const SurfaceFullWidth = Template.bind({});
SurfaceFullWidth.args = {
	children: (
		<ExtendedFab.Wrapper>
			<ExtendedFab.Icon>palette</ExtendedFab.Icon>
			<ExtendedFab.Label>Select brush</ExtendedFab.Label>
		</ExtendedFab.Wrapper>
	),
	color: "surface",
	width: "fluid",
};
SurfaceFullWidth.decorators = [
	(Story) => (
		<DeviceTemplate>
			<Story />
		</DeviceTemplate>
	),
];
