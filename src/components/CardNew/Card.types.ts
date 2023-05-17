import { BaseColor, NeutralColor } from "../../styles/colors";

export const cardType = ["elevated", "filled", "outlined"] as const;
export type CardType = typeof cardType[number];

export interface CardProps extends React.ComponentPropsWithRef<"div"> {
	children?: JSX.Element | JSX.Element[];
	type?: CardType;
	disabled?: boolean;
	stateLayer?: boolean; //  Used to add statelayer. action cards will contain buttons and thus won't need state behaviour. Example: when you hover or click buttons, the card styles should not be hovered or clicked. Navigation cards don't contain buttons and they would have state behaviour.
}

export type CardColor = BaseColor | NeutralColor;
