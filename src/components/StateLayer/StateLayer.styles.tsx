import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { ContentColorType } from "../Typography";
export type StateType = "enabled" | "disabled" | "hover" | "focus" | "pressed" | "dragged";

// Based on content color https://m3.material.io/foundations/interaction-states#47199ac9-3353-438b-a9e2-2d0d0eb39f6a

export interface StyledStateLayerProps {
	state?: StateType;
	color?: ContentColorType;
}

export const StyledStateLayer = styled.div<StyledStateLayerProps>(
	({ theme, state, color }) => css`
		background-color: ${setAlphaOnHex(theme.color[color!], theme.stateOpacity.stateLayer[state!])};
	`
);
