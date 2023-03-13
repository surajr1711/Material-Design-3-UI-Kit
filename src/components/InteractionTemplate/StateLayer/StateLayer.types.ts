import { BaseColor, OnColor } from "../../../styles/colors";
import { State } from "../../../styles/interactionStates";

export interface StateLayerProps extends React.ComponentPropsWithRef<"div"> {
	stateLayerColor: OnColor | Extract<BaseColor, "primary">;
	state: State;
}
