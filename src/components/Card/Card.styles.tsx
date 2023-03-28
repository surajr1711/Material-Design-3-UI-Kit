import styled, { css } from "styled-components";
import { OnColor } from "../../styles/colors";
import { Elevation } from "../../styles/elevation";
import { State } from "../../styles/interactionStates";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { CardColor, CardProps, CardType } from "./Card.types";

export const cardColors: {
	[T in CardType]: {
		container: CardColor;
		stateLayer: OnColor;
	};
} = {
	elevated: {
		container: "surface",
		stateLayer: "onSurface",
	},
	filled: {
		container: "surfaceVariant",
		stateLayer: "onSurface",
	},
	outlined: {
		container: "surface",
		stateLayer: "onSurface",
	},
};
export const cardStateElevations: {
	[T in CardType]: {
		[S in State]: Elevation;
	};
} = {
	elevated: {
		enabled: "level1",
		hover: "level2",
		focus: "level1",
		pressed: "level1",
		dragged: "level3",
		disabled: "level0",
	},
	filled: {
		enabled: "level0",
		hover: "level1",
		focus: "level0",
		pressed: "level0",
		dragged: "level3",
		disabled: "level1",
	},
	outlined: {
		enabled: "level0",
		hover: "level1",
		focus: "level0",
		pressed: "level0",
		dragged: "level2",
		disabled: "level0",
	},
};

export interface StyledCardProps extends CardProps {
	state: State;
}

export const StyledCard = styled.div<StyledCardProps>(({ theme, type, state }) => {
	return css`
		position: relative;
		border-radius: ${theme.shape.rounded.medium};
		overflow: hidden;
		background-color: ${theme.color[cardColors[type!].container]};
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		// box shadow disabled state managed directly here
		box-shadow: ${theme.elevation.boxShadow[cardStateElevations[type!][state!]]};

		// disabled
		${state === "disabled" &&
		css`
			pointer-events: none;
			background-color: ${setAlphaOnHex(
				theme.color[cardColors[type!].container],
				theme.stateOpacity.container.disabled
			)};
		`}
	`;
});

export const ElevatedCard = styled(StyledCard)<StyledCardProps>``;

export const FilledCard = styled(StyledCard)<StyledCardProps>``;

export const OutlinedCard = styled(StyledCard)<StyledCardProps>(({ theme, state }) => {
	return css`
		border: 1px solid ${theme.color.outline};
		// disabled css
		${state === "disabled" &&
		css`
			border-color: ${setAlphaOnHex(theme.color.outline, theme.stateOpacity.outline.disabled)};
		`}
	`;
});
