import styled, { css } from "styled-components";
import { useInteractionLayersCSS } from "../InteractionLayers";
import { setAlphaOnHex } from "../../utils/setAlphaOnHex";
import { SegmentedLabelProps } from "./SegmentedButtons.types";

const SegmentedLabel = styled.label<SegmentedLabelProps>(
	({ theme, disabled }) => css`
		position: relative;
		isolation: isolate;
		// Segbuttons parent controls actual height according to density prop
		height: 100%;
		padding-inline: 0.75rem;
		// Dont wrap any text
		white-space: nowrap;
		// set borders for all labels top bottom and left;seperators.
		border-block: 1px solid ${theme.color.outline};
		border-left: 1px solid ${theme.color.outline};
		// add seperator between buttons. apply border-left all buttons
		&:last-child {
			border-right: 1px solid ${theme.color.outline};
		}
		// set curve shape
		&:first-child {
			border-radius: ${theme.shape.rounded.full} 0 0 ${theme.shape.rounded.full};
		}
		&:last-child {
			border-radius: 0 ${theme.shape.rounded.full} ${theme.shape.rounded.full} 0;
		}
		// dont let layers overflow out of border radius
		overflow: hidden;
		// do not allow selection span and icon inside label. Luckily it doesn't affect the input. Input can still be selected.
		* {
			pointer-events: none;
		}
		// style label if the contained input is checked
		&:has(input:checked) {
			background-color: ${theme.color.secondaryContainer};
			span {
				color: ${theme.color.onSecondaryContainer};
			}
		}

		// set border color to disabled opacity 12%
		&:has(input:disabled) {
			pointer-events: none;
			border-color: ${setAlphaOnHex(theme.color.outline, 0.12)};
		}

		// STATES
		${useInteractionLayersCSS(disabled)}
	`
);

export default SegmentedLabel;
