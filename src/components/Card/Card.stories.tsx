// IMPORTS
// 3rd part packages
import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
// Types
import { cardType } from "./Card.types";
// Custom components
import Card from "./Card";
import CardContent from "./CardContent";
import CardText from "./CardText";
import Button from "../Button";
// Styles
import "./CardStories.css";
import { stateKeys } from "../../styles/interactionStates";

export default {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: { control: "select", options: cardType },
		state: { control: "radio", options: stateKeys },
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const ElevatedCardMedia = styled.div`
	aspect-ratio: 16/9;
	background-color: ${(props) => props.theme.color.primaryContainer};
`;
const ElevatedCardContent = (
	<Card.Content>
		<CardContent.Media>
			<ElevatedCardMedia />
		</CardContent.Media>
		<CardContent.Text>
			<CardText.Headline typescale="headlineLarge" color="onSurface">
				Headline
			</CardText.Headline>
			<CardText.Subhead typescale="headlineSmall" color="onSurface">
				Subhead
			</CardText.Subhead>
			<CardText.SupportingText typescale="bodyMedium" color="onSurface">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere odit quibusdam, nemo adipisci debitis.
			</CardText.SupportingText>
		</CardContent.Text>
		<CardContent.Actions className="elevatedCardActions">
			<Button label="Action 1" variant="outlined" />
			<Button label="Action 2" />
		</CardContent.Actions>
	</Card.Content>
);

const FilledCardMedia = styled.div`
	aspect-ratio: 32/9;
	background-color: ${(props) => props.theme.color.inversePrimary};
	border-radius: 999rem;
	margin-top: 1rem;
`;
const FilledCardContent = (
	<Card.Content className="filledCardContent">
		<CardContent.Text>
			<CardText.Headline />
			<CardText.Subhead />
			<CardText.SupportingText />
		</CardContent.Text>
		<CardContent.Media>
			<FilledCardMedia />
		</CardContent.Media>
		<CardContent.Actions className="filledCardActions" />
	</Card.Content>
);

const OutlinedCardMedia = styled.div`
	aspect-ratio: 32/9;
	background-color: ${(props) => props.theme.color.inversePrimary};
	border-radius: 1rem;
`;
const OutlinedCardContent = (
	<Card.Content>
		<CardContent.Actions />
		<CardContent.Media>
			<OutlinedCardMedia />
		</CardContent.Media>
		<CardContent.Actions />
	</Card.Content>
);

export const Default = Template.bind({});
Default.args = {
	onClick: (e) => console.log("hello from custom handleClick", e.currentTarget),
};

export const Elevated = Template.bind({});
Elevated.args = {
	type: "elevated",
	children: ElevatedCardContent,
};

export const Filled = Template.bind({});
Filled.args = {
	type: "filled",
	children: FilledCardContent,
};

export const Outlined = Template.bind({});
Outlined.args = {
	type: "outlined",
	children: OutlinedCardContent,
};
