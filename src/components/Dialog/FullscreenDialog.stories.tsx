import { ComponentMeta, ComponentStory, DecoratorFn } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button/Button";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";
import { useDialogUtils } from "./useDialogUtils";
// import BasicDialog from "./BasicDialog";

const FullscreenDialog = Dialog("fullscreen");

// DECORATOR
const useDialogDecorator: DecoratorFn = (StoryFn, context) => {
	const {
		ref,
		// dialogIsOpen, setDialogIsOpen,
		openModal,
		closeModal,
	} = useDialogUtils();

	return (
		<div style={{ display: "grid", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<Button onClick={openModal}>Open Dialog</Button>
			<StoryFn args={{ ref, closeModal, ...context.args }} />
		</div>
	);
};

// META
export default {
	title: "Components/Dialog/FullscreenDialog",
	component: FullscreenDialog,
	parameters: {
		layout: "fullscreen",
	},
	decorators: [useDialogDecorator],
	argTypes: {
		header: { table: { disable: true } },
		body: { table: { disable: true } },
		actions: { table: { disable: true } },
		idOfPortalElement: { table: { disable: true } },
	},
} as ComponentMeta<typeof FullscreenDialog>;

const Template: ComponentStory<typeof FullscreenDialog> = (args) => <FullscreenDialog {...args} />;

// STORIES
export const Default = Template.bind({});
Default.args = {};

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
