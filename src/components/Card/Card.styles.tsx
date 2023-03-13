import styled, { css } from "styled-components";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { CardProps, CardStateStyles, CardStyles } from "./Card.types";

export const elevatedCardStyles: CardStyles = {
	cardColor: "surface",
	elevation: "level1",
	stateLayerColor: "onSurface",
};
export const elevatedCardStateStyles: CardStateStyles = {
	enabled: {
		...elevatedCardStyles,
	},
	hover: {
		...elevatedCardStyles,
		elevation: "level2",
	},
	focus: {
		...elevatedCardStyles,
		elevation: "level1",
	},
	pressed: {
		...elevatedCardStyles,
		elevation: "level1",
	},
	dragged: {
		...elevatedCardStyles,
		elevation: "level3",
	},
	disabled: {
		...elevatedCardStyles,
		cardColor: "surfaceVariant",
		elevation: "level0",
	},
};

export const filledCardStyles: CardStyles = {
	cardColor: "surfaceVariant",
	elevation: "level0",
	stateLayerColor: "onSurface",
};
export const filledCardStateStyles: CardStateStyles = {
	enabled: {
		...filledCardStyles,
	},
	hover: {
		...filledCardStyles,
		elevation: "level1",
	},
	focus: {
		...filledCardStyles,
		elevation: "level0",
	},
	pressed: {
		...filledCardStyles,
		elevation: "level0",
	},
	dragged: {
		...filledCardStyles,
		elevation: "level3",
	},
	disabled: {
		...filledCardStyles,
		cardColor: "surface",
		elevation: "level1",
	},
};

export const outlinedCardStyles: CardStyles = {
	cardColor: "surface",
	elevation: "level0",
	stateLayerColor: "onSurface",
};
export const outlinedCardStateStyles: CardStateStyles = {
	enabled: {
		...outlinedCardStyles,
	},
	hover: {
		...outlinedCardStyles,
		elevation: "level1",
	},
	focus: {
		...outlinedCardStyles,
		elevation: "level0",
	},
	pressed: {
		...outlinedCardStyles,
		elevation: "level0",
	},
	dragged: {
		...outlinedCardStyles,
		elevation: "level2",
	},
	disabled: {
		...outlinedCardStyles,
		cardColor: "surface",
		elevation: "level0",
	},
};

export const StyledCard = styled.div<CardProps>(({ theme }) => {
	return css`
		position: relative;
		border-radius: ${theme.shape.rounded.medium};
		overflow: hidden;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};
	`;
});

export const ElevatedCard = styled(StyledCard)<CardProps>(({ theme, state }) => {
	const { cardColor, elevation } = elevatedCardStateStyles[state!];
	return css`
		background-color: ${theme.color[cardColor!]};
		box-shadow: ${theme.elevation.boxShadow[elevation!]};
		// disabled css
		${state === "disabled" &&
		css`
			pointer-events: none;
			background-color: ${setAlphaOnHex(theme.color[cardColor], theme.stateOpacity.container.disabled)};
		`}
	`;
});

export const FilledCard = styled(StyledCard)<CardProps>(({ theme, state }) => {
	const { cardColor, elevation } = filledCardStateStyles[state!];
	return css`
		background-color: ${theme.color[cardColor!]};
		box-shadow: ${theme.elevation.boxShadow[elevation!]};
		// disabled css
		${state === "disabled" &&
		css`
			pointer-events: none;
			background-color: ${setAlphaOnHex(theme.color[cardColor], theme.stateOpacity.container.disabled)};
			box-shadow: ${theme.elevation.boxShadow["level0"]};
		`}
	`;
});

export const OutlinedCard = styled(StyledCard)<CardProps>(({ theme, state }) => {
	const { cardColor, elevation } = outlinedCardStateStyles[state!];
	return css`
		background-color: ${theme.color[cardColor!]};
		box-shadow: ${theme.elevation.boxShadow[elevation!]};
		border: 1px solid ${theme.color.outline};
		// disabled css
		${state === "disabled" &&
		css`
			pointer-events: none;
			background-color: ${setAlphaOnHex(theme.color[cardColor], theme.stateOpacity.container.disabled)};
			border-color: ${setAlphaOnHex(theme.color.outline, theme.stateOpacity.outline.disabled)};
		`}
	`;
});
