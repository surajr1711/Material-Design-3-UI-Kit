import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";
import Button from "../Button";
import "./CardStories.css";
import { Frame, Inline, PadBox, Stack } from "@bedrock-layout/primitives";
import Text from "../Text";
import { CardImage } from "./Card.stubs";
import { shape } from "../../styles/shape";
import { cardType } from "./Card.types";
import IconButton from "../IconButton";

export default {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		type: { control: "select", options: cardType },
		disabled: { control: "boolean" },
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ElevatedCard = Template.bind({});
ElevatedCard.args = {
	type: "elevated",
	children: (
		<Stack>
			{/* Media block */}
			<Frame ratio="16/9">
				<CardImage />
			</Frame>
			<PadBox padding="1rem">
				<Stack gutter="1rem">
					{/* Text block */}
					<Stack gutter="0.5rem">
						<Text typescale="headlineLarge" color="onSurface">
							Headline
						</Text>
						<Text typescale="headlineSmall" color="onSurface">
							Subhead
						</Text>
						<Text typescale="bodyMedium" color="onSurface">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere odit quibusdam, nemo adipisci debitis.
						</Text>
					</Stack>
					{/* Actions block */}
					<Inline gutter="1rem">
						<Button label="Action 1" variant="outlined" />
						<Button label="Action 2" />
					</Inline>
				</Stack>
			</PadBox>
		</Stack>
	),
};

export const FilledCard = Template.bind({});
FilledCard.args = {
	type: "filled",
	children: (
		<PadBox padding="1rem">
			<Stack>
				{/* Text block */}
				<Text typescale="displaySmall">Live music coming soon to The Hideout</Text>
				{/* Media block */}
				<Stack>
					<Frame ratio="16/9">
						<CardImage />
					</Frame>
					<Text typescale="bodyMedium">
						Watch exclusive live performances at The Hideout every Saturday starting at 7pm.
					</Text>
				</Stack>
				{/* Actions */}
				<Inline>
					<Inline>
						<Button>Get Tickets</Button>
						<Button variant="outlined">LearnMore</Button>
					</Inline>
					<IconButton icon="edit" />
				</Inline>
			</Stack>
		</PadBox>
	),
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
	children: (
		<PadBox padding="1rem">
			<Stack gutter="1rem">
				{/* Actions */}
				<Inline stretch="start">
					<IconButton icon="edit" />
					<Inline gutter="0.5rem">
						<Button variant="outlined">Favorite</Button>
						<Button variant="outlined">Mark Date</Button>
					</Inline>
				</Inline>
				<Stack />

				{/* Media */}
				<Inline align="stretch" gutter="0.5rem" style={{ height: "10rem" }}>
					<CardImage style={{ borderRadius: `${shape.rounded.large}`, width: "24rem" }} />
					<CardImage style={{ borderRadius: `${shape.rounded.full}`, width: "4rem" }} />
				</Inline>

				{/* Text */}
				<Text typescale="bodyMedium">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos at, adipisci dolorem qui vel omnis sit.
					Doloremque obcaecati molestias temporibus quod exercitationem error aliquid, officiis quo consequuntur eius
					culpa in?
				</Text>

				{/* Actions */}
				<Inline stretch="start">
					{/* Primary Buttons */}
					<Inline gutter="0.5rem">
						<Button variant="tonal">Favorite</Button>
						<Button variant="tonal">Mark Date</Button>
					</Inline>
					{/* Quick Actions */}
					<Inline gutter="0.5rem">
						<IconButton variant="standard" icon="face" />
						<IconButton variant="standard" icon="phone" />
					</Inline>
				</Inline>

				<Stack />
			</Stack>
		</PadBox>
	),
};
