import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { CircularIndicator } from "./ProgressIndicator.styles";

export interface ProgressIndicatorProps {
	progress: number; // number from 0-100. used for path length
	determinate: boolean; // is the animation type determinate (progress based) or indeterminate (infinite)
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress = 0, determinate = true }) => {
	const size = 24,
		strokeWidth = 3,
		center = size / 2,
		radius = center - strokeWidth,
		dashArray = 2 * Math.PI * radius,
		dashOffset = dashArray * ((100 - progress) / 100);

	// if determinate is false or undefined
	// create an animation that rotates the svg
	// svg must also alternate between 80% and 5%
	return (
		<CircularIndicator>
			<motion.svg height={size} viewBox={`0 0 ${size} ${size}`} width={size} transform="rotate(-90)">
				<motion.circle
					cx={center}
					cy={center}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={dashArray}
					strokeDashoffset={dashOffset}
					strokeLinecap="square"
				/>
			</motion.svg>
		</CircularIndicator>
	);
};

export default ProgressIndicator;
