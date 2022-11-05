import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DecoratorFn } from "@storybook/react";
import styled from "styled-components";

import Typography from "./Typography";

interface StyledBackgroundProps {
	color?:
		| "primary"
		| "primaryContainer"
		| "secondary"
		| "secondaryContainer"
		| "tertiary"
		| "tertiaryContainer"
		| "error"
		| "errorContainer"
		| "background"
		| "surface"
		| "surfaceVariant";
}
const StyledBackground = styled.div<StyledBackgroundProps>`
	min-height: 100vh;
	display: grid;
	align-items: center;
	justify-content: center;
	background-color: ${({ color, theme }) => (color ? theme.color[color] : "background")};
`;
StyledBackground.defaultProps = {
	color: "background",
};

const withBackground: DecoratorFn = (StoryFn, context) => {
	return (
		<StyledBackground color={context.parameters.background}>
			<StoryFn />
		</StyledBackground>
	);
};

export default {
	component: Typography,
	title: "Components/Typography",
	decorators: [withBackground],
	argTypes: {
		color: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "Default paragraph onBackground",
};

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
	label: "displayLarge as h1 onPrimaryContainer",
	type: "displayLarge",
	tag: "h1",
	color: "onPrimaryContainer",
};
DisplayLarge.parameters = {
	background: "primaryContainer",
};

export const HeadlineLarge = Template.bind({});
HeadlineLarge.args = {
	children: "headlineLarge as h2 onSecondaryContainer",
	type: "headlineLarge",
	tag: "h2",
	color: "onSecondaryContainer",
};
HeadlineLarge.parameters = {
	background: "secondaryContainer",
};

export const TitleLarge = Template.bind({});
TitleLarge.args = {
	children: "titleLarge as h3 onTertiaryContainer",
	type: "titleLarge",
	tag: "h3",
	color: "onTertiaryContainer",
};
TitleLarge.parameters = {
	background: "tertiaryContainer",
};

export const LabelLarge = Template.bind({});
LabelLarge.args = {
	children: "labelLarge as h4 onErrorContainer",
	type: "labelLarge",
	tag: "h4",
	color: "onErrorContainer",
};
LabelLarge.parameters = {
	background: "errorContainer",
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
	children: "bodyLarge as span onSurface",
	type: "bodyLarge",
	tag: "span",
	color: "onSurface",
};
BodyLarge.parameters = {
	background: "surface",
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
	children: "displayMedium with onPrimary",
	type: "displayMedium",
	color: "onPrimary",
};
DisplayMedium.parameters = {
	background: "primary",
};

export const HeadlineMedium = Template.bind({});
HeadlineMedium.args = {
	children: "headlineMedium with onSecondary",
	type: "headlineMedium",
	color: "onSecondary",
};
HeadlineMedium.parameters = {
	background: "secondary",
};

export const TitleMedium = Template.bind({});
TitleMedium.args = {
	children: "titleMedium with onTertiary",
	type: "titleMedium",
	color: "onTertiary",
};
TitleMedium.parameters = {
	background: "tertiary",
};

export const LabelSmall = Template.bind({});
LabelSmall.args = {
	children: "labelSmall with onError",
	type: "labelSmall",
	color: "onError",
};
LabelSmall.parameters = {
	background: "error",
};

export const BodySmall = Template.bind({});
BodySmall.args = {
	children: "bodySmall with onSurfaceVariant",
	type: "bodySmall",
	color: "onSurfaceVariant",
};
BodySmall.parameters = {
	background: "surfaceVariant",
};
