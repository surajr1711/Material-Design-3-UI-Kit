import React from "react";
import profile from "./placeholder.webp";
import { StyledImg } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
	({ sizeInRems = 2, shapeScale = "full", disabled = false, ...restProps }, ref) => {
		return (
			<StyledImg
				ref={ref}
				sizeInRems={sizeInRems}
				shapeScale={shapeScale}
				disabled={disabled}
				src={profile}
				width={`${sizeInRems * 16}`}
				height={`${sizeInRems * 16}`}
				{...restProps}
			/>
		);
	}
);

export default Avatar;
