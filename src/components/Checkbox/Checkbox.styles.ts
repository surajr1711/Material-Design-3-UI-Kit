import styled, { css } from "styled-components";
import { CheckboxInputProps, CheckboxState } from "./Checkbox.types";
import { Color } from "../../styles/colors";
import { useInteractionLayersCSS } from "../InteractionLayers";

// CHECKBOX - contains input + label
export const StyledCheckbox = styled.div`
	display: flex;
	justify-content: start;
	align-items: stretch;
	gap: 1rem;

	// disabled label when input is disabled
	&:has(input:disabled) label {
		pointer-events: none;
	}
`;

// CHECKBOXLABEL
export const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	user-select: none;
`;

// CHECKBOXINPUT
export const checkboxLayout = {
	width: 2.5, // rems 40px
	height: 2.5, // rems 40px
	iconSize: 1.125, //rems 18px
	shapeFamily: "rounded",
	shapeScale: "full",
} as const;

export type CheckboxStateColors = { [T in CheckboxState]: Color };
export type CheckboxColors = {
	noError: CheckboxStateColors;
	error: CheckboxStateColors;
	disabled: CheckboxStateColors;
};
export const checkboxColors: CheckboxColors = {
	noError: {
		selected: "primary", // icon color
		unselected: "onSurface", // icon color
		indeterminate: "primary", // icon color
	},
	error: {
		selected: "error",
		unselected: "error",
		indeterminate: "error",
	},
	disabled: {
		selected: "onSurface",
		unselected: "onSurface",
		indeterminate: "onSurface",
	},
};

// The input that will be clicked
export const StyledInput = styled.input.attrs({
	type: "checkbox",
})`
	// remove the radio circle and checkbox square
	appearance: none;
	// remove input from flow of content. place
	position: absolute;
	inset: 0;
	z-index: 4;

	&:disabled {
		pointer-events: none;
	}
`;

// Wraps statelayer, contentlayer and input
export const CheckboxWrapper = styled.div<CheckboxInputProps>(
	({ theme, disabled }) => css`
		height: ${checkboxLayout.height}rem;
		width: ${checkboxLayout.width}rem;
		border-radius: ${theme.shape[checkboxLayout.shapeFamily][checkboxLayout.shapeScale]};
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		overflow: hidden;
		position: relative;
		isolation: isolate;

		&:has(input:disabled) {
			pointer-events: none;
		}

		${useInteractionLayersCSS(disabled)}
	`
);
