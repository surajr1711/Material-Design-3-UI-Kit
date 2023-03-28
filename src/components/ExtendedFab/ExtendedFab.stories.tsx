import { Inline } from "@bedrock-layout/primitives";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DeviceTemplate from "../../styles/DeviceTemplate";
import Icon from "../Icon";
import Text from "../Text";
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
	argTypes: {
		disabled: { table: { disable: true } },
		icon: { table: { disable: true } },
		label: { table: { disable: true } },
	},
} as ComponentMeta<typeof ExtendedFab>;

const Template: ComponentStory<typeof ExtendedFab> = (args) => <ExtendedFab {...args} />;

export const Default = Template.bind({});
Default.args = {
	disabled: true,
};

export const TertiaryWithoutIcon = Template.bind({});
TertiaryWithoutIcon.args = {
	icon: <Icon children="add" />,
	label: <Text children="Click to add" />,
	color: "tertiary",
};

export const SurfaceFullWidth = Template.bind({});
SurfaceFullWidth.args = {
	icon: <Icon children="palette" />,
	label: <Text children="Select brush" />,
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
