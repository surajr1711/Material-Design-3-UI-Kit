import { ComponentMeta, ComponentStory, DecoratorFn } from "@storybook/react";
import Dialog from "./Dialog";
import React, { MouseEventHandler, useRef, useState } from "react";
import Button from "../Button/Button";
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogActions from "./DialogActions";
import DialogActionsButton from "./DialogActionsButton";

// DECORATOR
const useDialogDecorator: DecoratorFn = (StoryFn, context) => {
	const ref = useRef<HTMLDialogElement>(null);
	const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

	const openModal: MouseEventHandler<HTMLButtonElement> = (e) => {
		ref.current?.showModal();
		setDialogIsOpen(true);
	};

	const closeModal: MouseEventHandler<HTMLButtonElement> = (e) => {
		ref.current?.close();
		console.log("closed");
		setDialogIsOpen(false);
	};

	return (
		<div style={{ display: "grid", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<Button onClick={openModal}>Toggle Dialog</Button>
			<StoryFn args={{ ref, closeModal, ...context.args }} />
		</div>
	);
};

// META
export default {
	title: "Components/Dialog",
	component: Dialog,
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
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

// STORIES
export const Default = Template.bind({});
Default.args = {
	header: <DialogHeader headline="With icon" iconName="home" />,
	body: (
		<DialogBody>
			<DialogBody.SupportingText>
				Header and Body items are center-aligned when an icon is provided.
			</DialogBody.SupportingText>
		</DialogBody>
	),
	actions: <DialogActions confirmingButton={<DialogActionsButton label="Got it" />} />,
};

// left aligned without icon
export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
	header: <DialogHeader headline="Without Icon" />,
	body: (
		<DialogBody>
			<DialogBody.SupportingText>
				Heading and Body items are left-aligned when icon is not provided.
			</DialogBody.SupportingText>
		</DialogBody>
	),
	actions: <DialogActions confirmingButton={<DialogActionsButton label="OK" />} />,
};

// Without Header
export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
	body: (
		<DialogBody>
			<DialogBody.SupportingText>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quidem fugiat doloremque ducimus id quisquam
				voluptas totam ullam placeat harum.
			</DialogBody.SupportingText>
		</DialogBody>
	),
	actions: <DialogActions confirmingButton={<DialogActionsButton label="Noted" />} />,
};

// // Custom Body
// export const CustomBody = Template.bind({})

// Without Body
export const WithoutBody = Template.bind({});
WithoutBody.args = {
	header: <DialogHeader headline="Delete this entry?" />,
	actions: (
		<DialogActions
			confirmingButton={<DialogActionsButton label="Delete" />}
			dismissingButton={<DialogActionsButton label="Cancel" />}
		/>
	),
};

// With both Confirming and Dismission Action buttons
export const BothConfirmingDismissingButtons = Template.bind({});
BothConfirmingDismissingButtons.args = {
	header: <DialogHeader headline="Apply these settings?" />,
	body: (
		<DialogBody>
			<DialogBody.SupportingText>
				Device will reboot with the changes. Click 'Apply' to accept changes and reboot or click 'Cancel' to return to
				settings and continue editing.
			</DialogBody.SupportingText>
		</DialogBody>
	),
	actions: (
		<DialogActions
			confirmingButton={<DialogActionsButton label="Apply" />}
			dismissingButton={<DialogActionsButton label="Cancel" />}
		/>
	),
};
