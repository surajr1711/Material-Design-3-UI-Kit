import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button/Button";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";
import { useDialogUtils } from "./useDialogUtils";
// import BasicDialog from "./BasicDialog";

const BasicDialog = Dialog("basic");

// META
export default {
	title: "Components/Dialog/BasicDialog",
	component: BasicDialog,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		header: { table: { disable: true } },
		body: { table: { disable: true } },
		actions: { table: { disable: true } },
		idOfPortalElement: { table: { disable: true } },
	},
	args: {
		header: <DialogHeader headline="Hello" />,
		body: (
			<DialogBody>
				<DialogBody.SupportingText>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur illum adipisci dicta nulla impedit
					debitis deleniti voluptatum beatae. Consequuntur, nisi?
				</DialogBody.SupportingText>
			</DialogBody>
		),
		actions: <DialogActions confirmingButton={<DialogActionsButton label="Apply" form="test-form" type="submit" />} />,
	},
} as ComponentMeta<typeof BasicDialog>;

const Template: ComponentStory<typeof BasicDialog> = (args) => {
	const { ref, openDialog, closeDialog } = useDialogUtils();

	return (
		<>
			<div style={{ height: "100vh" }}>
				<Button onClick={openDialog} label="Open Dialog" />
				<BasicDialog ref={ref} {...args} closeDialog={closeDialog} />
			</div>
		</>
	);
};

// STORIES
export const Default = Template.bind({});
Default.args = {};

// center aligned with icon
export const WithHeaderIcon = Template.bind({});
WithHeaderIcon.args = {
	header: <DialogHeader iconName="phone" headline="" />,
	body: (
		<DialogBody>
			<DialogBody.SupportingText>Heading and Body are center-aligned when icon is provided.</DialogBody.SupportingText>
		</DialogBody>
	),
};

// With both Confirming and Dismission Action buttons
export const DialogWithConfirmAndCancel = Template.bind({});
DialogWithConfirmAndCancel.args = {
	header: <DialogHeader headline="Select ringtone" />,
	body: (
		<DialogBody>
			<form id="test-form">
				<input type="radio" id="ringtone1" name="ringtone" />
				<label htmlFor="ringtone1">Bell</label>
				<input type="radio" id="ringtone2" name="ringtone" />
				<label htmlFor="ringtone2">Chime</label>
			</form>
		</DialogBody>
	),
	actions: (
		<DialogActions
			confirmingButton={<DialogActionsButton label="Select" form="test-form" type="submit" />}
			dismissingButton={<DialogActionsButton label="Cancel" formMethod="dialog" form="test-form" />}
		/>
	),
};
