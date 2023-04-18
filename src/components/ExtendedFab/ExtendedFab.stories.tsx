import { Inline } from "@bedrock-layout/primitives";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DeviceTemplate from "../../styles/DeviceTemplate";
import ExtendedFab from "./ExtendedFab";
import { fabColor } from "../Fab/Fab.types";
import { extFabWidthKeys } from "./ExtendedFab.types";

export default {
	title: "Components/ExtendedFab",
	component: ExtendedFab,
	args: {
		onClick: (e) => alert(`${e.target}, ${e.type}`),
		// onMouseEnter: (e) => console.log(e.target, e.type),
		// onMouseLeave: (e) => console.log(e.target, e.type),
		// onClick: (e) => console.log(e.target, e.type),
		// onFocus: (e) => console.log(e.target, e.type),
	},
	argTypes: {
		icon: { control: "string" },
		label: { control: "string" },
		color: {
			options: fabColor,
			control: { type: "radio" },
		},
		withIcon: { control: "boolean" },
		disabled: { table: { disable: true } },
		width: {
			options: extFabWidthKeys,
			control: { type: "radio" },
		},
		// icon: { table: { disable: true } },
		// label: { table: { disable: true } },
	},
} as ComponentMeta<typeof ExtendedFab>;

const Template: ComponentStory<typeof ExtendedFab> = (args) => <ExtendedFab {...args} />;

export const Default = Template.bind({});
Default.args = {
	disabled: true,
};

export const TertiaryWithoutIcon = Template.bind({});
TertiaryWithoutIcon.args = {
	icon: "add",
	label: "Click to add",
	color: "tertiary",
	withIcon: false,
};

export const SurfaceFullWidth = Template.bind({});
SurfaceFullWidth.args = {
	icon: "palette",
	label: "Select brush",
	color: "surface",
	width: "fluid",
};
SurfaceFullWidth.decorators = [
	(Story) => (
		<DeviceTemplate>
			<Inline style={{ position: "absolute", bottom: "4rem", marginInline: "1rem" }}>
				<Story />
			</Inline>
		</DeviceTemplate>
	),
];
