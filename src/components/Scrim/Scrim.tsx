import React from "react";
import PropType from "prop-types";
import { Color, colorKeys } from "../../styles/colors";
import styled, { css } from "styled-components";

export interface ScrimProps extends React.ComponentPropsWithRef<"div"> {
	color?: Color;
	opacity?: number; // between 0-1
	zIndex?: number;
}

const StyledScrim = styled.div<ScrimProps>(({ theme, color = "scrim", opacity = 0.5, zIndex = 0 }) => {
	return css`
		position: absolute;
		inset: 0;
		isolation: isolate;
		z-index: ${zIndex};
		height: 100vh;
		background-color: ${theme.color[color]};
		opacity: ${opacity};
	`;
});

const Scrim = React.forwardRef<HTMLDivElement, ScrimProps>(
	({ color = "scrim", opacity = 0.5, zIndex = 0, ...restProps }, ref) => {
		if (opacity < 0 && opacity > 1) {
			throw new Error("Opacity value should be from 0-1.");
		}

		return <StyledScrim ref={ref} color={color} opacity={opacity} zIndex={zIndex} {...restProps} />;
	}
);

Scrim.displayName = "Scrim";

Scrim.propTypes = {
	color: PropType.oneOf(colorKeys),
	opacity: PropType.number,
	zIndex: PropType.number,
};

export default Scrim;
