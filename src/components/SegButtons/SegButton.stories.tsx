import { ComponentMeta, ComponentStory } from "@storybook/react";
import Type from "../Text";
import Input from "./Input";
// import Label from "./Label";
import SegButton from "./SegButton";

export default {
	title: "Components/Input",
	component: SegButton,
	subcomponents: { input: SegButton.Input, label: SegButton.Label },
	// component: SegButton.Input,
	// subcomponents: { SegButton, label: SegButton.Label },
	parameters: {
		layout: "centered",
	},
} as ComponentMeta<typeof Input>;

// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// export const Default = Template.bind({});

export const Group: ComponentStory<typeof SegButton> = (args) => (
	<>
		<SegButton {...args}>
			<SegButton.Input name="group" type="checkbox" value={1} />
			<SegButton.Label>
				<Type typescale="labelLarge" color="onBackground" tag="span">
					Label 1
				</Type>
			</SegButton.Label>
		</SegButton>
		<SegButton {...args}>
			<SegButton.Input name="group" type="checkbox" value={2} />
			<SegButton.Label>
				<Type typescale="labelLarge" color="onBackground" tag="span">
					Label 2
				</Type>
			</SegButton.Label>
		</SegButton>
	</>
);
/* export const Group: ComponentStory<typeof Input> = (args) => (
	<>
		<SegButton>
			<SegButton.Input name="group" type="checkbox" value={1} {...args} />
			<SegButton.Label>
				<Type typescale="labelLarge" label="Label 1" color="onBackground" tag="span" />
			</SegButton.Label>
		</SegButton>
		<SegButton>
			<SegButton.Input name="group" type="checkbox" value={2} {...args} />
			<SegButton.Label>
				<Type typescale="labelLarge" label="Label 2" color="onBackground" tag="span" />
			</SegButton.Label>
		</SegButton>
	</>
); */
