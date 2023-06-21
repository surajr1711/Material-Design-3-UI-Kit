import { ComponentMeta, ComponentStory, DecoratorFn } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button/Button";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";
import { useDialogUtils } from "./useDialogUtils";

const FullscreenDialog = Dialog("fullscreen");

// META
export default {
	title: "Components/Dialog/FullscreenDialog",
	component: FullscreenDialog,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		closeModal: { table: { disable: true } },
		header: { table: { disable: true } },
		body: { table: { disable: true } },
		actions: { table: { disable: true } },
		idOfPortalElement: { table: { disable: true } },
	},
	args: {
		// dialogIsOpen: true,
		// header: <DialogHeader headline="Hello" />,
		// body: (
		// 	<DialogBody>
		// 		<DialogBody.SupportingText>
		// 			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur illum adipisci dicta nulla impedit
		// 			debitis deleniti voluptatum beatae. Consequuntur, nisi?
		// 		</DialogBody.SupportingText>
		// 	</DialogBody>
		// ),
		// actions: (
		// 	<DialogActions
		// 		confirmingButton={<DialogActionsButton label="Apply" form="test-form" type="submit" />}
		// 		// dismissingButton={<DialogActionsButton label="Cancel" formMethod="dialog" form="test-form" />}
		// 	/>
		// ),
	},
} as ComponentMeta<typeof FullscreenDialog>;

const Template: ComponentStory<typeof FullscreenDialog> = (args) => {
	const { ref, dialogIsOpen, openDialog, closeDialog } = useDialogUtils("fullscreen");

	return (
		<>
			<div style={{ height: "100vh" }}>
				<Button onClick={openDialog} label="Open Dialog" />
				<FullscreenDialog ref={ref} {...args} dialogIsOpen={dialogIsOpen} closeDialog={closeDialog} />
			</div>
		</>
	);
};

// STORIES
export const Default = Template.bind({});
Default.args = {};

export const Mobile = Template.bind({});
Mobile.parameters = {
	viewport: {
		defaultViewport: "Large Mobile",
	},
};

// // center aligned with icon
// export const WithHeaderIcon = Template.bind({});
// WithHeaderIcon.args = {
// 	header: <DialogHeader iconName="phone" headline="" />,
// 	body: (
// 		<DialogBody>
// 			<DialogBody.SupportingText>
// 				Heading and Body are center-aligned when icon is provided.
// 			</DialogBody.SupportingText>
// 		</DialogBody>
// 	),
// };

// // With both Confirming and Dismission Action buttons
// export const DialogWithForm = Template.bind({});
// DialogWithForm.args = {
// 	header: <DialogHeader headline="Apply these settings?" />,
// 	body: (
// 		<DialogBody>
// 			<DialogBody.SupportingText>Device will reboot with the changes. Enter system password.</DialogBody.SupportingText>
// 			<form id="test-form">
// 				<input type="password" name="" id="" />
// 			</form>
// 			<DialogBody.SupportingText>
// 				Click 'Apply' to accept changes and reboot or click 'Cancel' to return to settings and continue editing.
// 			</DialogBody.SupportingText>
// 		</DialogBody>
// 	),
// 	actions: (
// 		<DialogActions
// 			confirmingButton={<DialogActionsButton label="Apply" form="test-form" type="submit" />}
// 			dismissingButton={<DialogActionsButton label="Cancel" formMethod="dialog" form="test-form" />}
// 		/>
// 	),
// };
