import { BaseColor, onColorKeys, OnColor } from "../../../styles/colors";
import { State } from "../../../styles/interactionStates";

export type StateLayerColor = Extract<BaseColor, "primary"> | OnColor;
export const stateLayerColors: StateLayerColor[] = ["primary", ...onColorKeys];

export interface StateLayerProps extends React.ComponentPropsWithRef<"div"> {
	stateLayerColor: StateLayerColor;
	state: State;
}
