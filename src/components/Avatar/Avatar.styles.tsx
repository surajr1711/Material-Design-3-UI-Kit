import styled, { css } from "styled-components";
import { AvatarProps } from "./Avatar.types";

export const StyledImg = styled.img<AvatarProps>(
	({ theme, sizeInRems, shapeScale, disabled }) => css`
		width: ${sizeInRems}rem;
		height: ${sizeInRems}rem;
		border-radius: ${theme.shape.rounded[shapeScale!]};
		object-fit: cover;
		object-position: center;
		transition: all ${theme.motion.duration.medium4} ${theme.motion.easing.emphasized};

		${disabled &&
		css`
			filter: grayscale(100%);
			pointer-events: none;
		`}
	`
);
