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
	},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

// STORIES
export const Default = Template.bind({});
Default.args = {
	header: <DialogHeader headline="Test Headline" iconName="home" />,
	body: (
		<DialogBody>
			<DialogBody.SupportingText>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quidem fugiat doloremque ducimus id quisquam
				voluptas totam ullam placeat harum.
			</DialogBody.SupportingText>
		</DialogBody>
	),
	actions: <DialogActions confirmingButton={<DialogActionsButton label="Got it" />} />,
};

// // left aligned
// export const WithoutIcon = Template.bind({})

// // Without Header
// export const WithoutHeader = Template.bind({})

// // Custom Body
// export const CustomBody = Template.bind({})

// // Without Body
// export const WithoutBody = Template.bind({})

// // With Single Action
// export const SingleAction = Template.bind({})
