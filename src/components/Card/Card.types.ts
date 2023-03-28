import { BaseColor, NeutralColor } from "../../styles/colors";

export const cardType = ["elevated", "filled", "outlined"] as const;
export type CardType = typeof cardType[number];

export interface CardProps extends React.ComponentPropsWithRef<"div"> {
	children?: JSX.Element | JSX.Element[];
	type?: CardType;
	disabled?: boolean;
}

export type CardColor = BaseColor | NeutralColor;
