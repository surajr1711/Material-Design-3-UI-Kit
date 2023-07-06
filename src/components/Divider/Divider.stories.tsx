import { ComponentMeta, ComponentStory } from "@storybook/react";
import Divider from "./Divider";
import Card from "../Card/Card";
import React from "react";

export default {
	title: "Components/Divider",
	component: Divider,
	argTypes: {
		orientation: { table: { disable: true } },
	},
} as ComponentMeta<typeof Divider>;

const CardContent: React.FC<{ style?: React.CSSProperties; children?: React.ReactNode }> = ({ style, children }) => (
	<div style={style}>
		<div style={{ padding: "1rem" }}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam laborum accusantium ratione odio dicta
				reiciendis necessitatibus tempore nobis quaerat?
			</p>
		</div>
		{children}
		<div style={{ padding: "1rem" }}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quisquam laborum accusantium ratione odio dicta
				reiciendis necessitatibus tempore nobis quaerat?
			</p>
		</div>
	</div>
);

// horizontal inset
export const Default: ComponentStory<typeof Divider> = (args) => (
	<Card>
		<CardContent>
			<Divider {...args} />
		</CardContent>
	</Card>
);

// horizontal fullwidth
export const FullWidth: ComponentStory<typeof Divider> = (args) => (
	<Card>
		<CardContent>
			<Divider {...args} />
		</CardContent>
	</Card>
);
FullWidth.args = {
	width: "full",
};

// vertical
export const Vertical: ComponentStory<typeof Divider> = (args) => (
	<Card>
		<CardContent style={{ display: "flex" }}>
			<Divider {...args} />
		</CardContent>
	</Card>
);
Vertical.args = {
	orientation: "vertical",
};

// vertical fullwidth
export const VerticalFullWidth: ComponentStory<typeof Divider> = (args) => (
	<Card>
		<CardContent style={{ display: "flex" }}>
			<Divider {...args} />
		</CardContent>
	</Card>
);
VerticalFullWidth.args = {
	orientation: "vertical",
	width: "full",
};

// vertical using inline block
export const VerticalUsingInlineBlock: ComponentStory<typeof Divider> = (args) => (
	<Card>
		<div style={{ display: "inline-block", padding: "1rem" }}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus reiciendis cum beatae id laboriosam enim quis
				sit sequi molestias nesciunt.
			</p>
		</div>
		<Divider {...args} />
		<div style={{ display: "inline-block", padding: "1rem" }}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus reiciendis cum beatae id laboriosam enim quis
				sit sequi molestias nesciunt.
			</p>
		</div>
	</Card>
);
VerticalUsingInlineBlock.args = {
	orientation: "vertical",
};
