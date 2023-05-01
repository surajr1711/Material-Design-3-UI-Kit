import { ComponentMeta, ComponentStory } from "@storybook/react";
import SegmentedButtons, { densityKeys, optionsStub } from "./SegmentedButtons";

export default {
	title: "Components/NewSegmentedButtons",
	component: SegmentedButtons,
	// subcomponents: { input: SegButton.Input, label: SegButton.Label },
	parameters: {
		layout: "centered",
	},
	argTypes: {
		density: { control: "radio", options: densityKeys },
	},
} as ComponentMeta<typeof SegmentedButtons>;

const Template: ComponentStory<typeof SegmentedButtons> = (args) => <SegmentedButtons {...args} />;

export const Default = Template.bind({});
Default.args = {
	// options: optionsStub,
};
// export const Group: ComponentStory<typeof SegButton> = (args) => (
// 	<>
// 		<SegButton {...args}>
// 			<SegButton.Input name="group" type="checkbox" value={1} />
// 			<SegButton.Label>
// 				<Type typescale="labelLarge" color="onBackground" tag="span">
// 					Label 1
// 				</Type>
// 			</SegButton.Label>
// 		</SegButton>
// 		<SegButton {...args}>
// 			<SegButton.Input name="group" type="checkbox" value={2} />
// 			<SegButton.Label>
// 				<Type typescale="labelLarge" color="onBackground" tag="span">
// 					Label 2
// 				</Type>
// 			</SegButton.Label>
// 		</SegButton>
// 	</>
// );
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
