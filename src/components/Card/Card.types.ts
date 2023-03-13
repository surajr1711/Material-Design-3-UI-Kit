import { BaseColor, NeutralColor, OnColor } from "../../styles/colors";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import CardContent from "./CardContent";

export const cardType = ["elevated", "filled", "outlined"] as const;
export type CardType = typeof cardType[number];

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: JSX.Element;
	type?: CardType;
	state?: State;
	// onClick(e: React.MouseEvent<HTMLDivElement>): void
	// onMouseEnter?: () => void;
}
export interface CardComposition
	extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
	Content: typeof CardContent;
}

export type CardStyles = {
	cardColor: BaseColor | NeutralColor;
	elevation: Elevation;
	stateLayerColor: OnColor;
};

export type CardStateStyles = {
	[S in State]: CardStyles;
};
