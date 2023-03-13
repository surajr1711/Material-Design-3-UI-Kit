import { ComponentColor, OnColor, onColorKeys } from "../styles/colors";

type UseOnColor = (componentColor: ComponentColor) => OnColor;

export const useOnColor: UseOnColor = (componentColor) => {
	// 1. get the componentColor. convert to lowercase
	const checkColor: string = componentColor.toLowerCase();

	const matchColor = (currentColor: OnColor): boolean => {
		// 3. remove the 'on' from the current on-color
		// 4. check if remaining string lowercase === componentcolor
		return currentColor.toLowerCase().slice(2) === checkColor;
	};

	// 2. go through the array of on-colors
	const onColor: OnColor = onColorKeys.find(matchColor) || "onPrimary";

	// 5. return current on-color if true else default to onPrimary
	// console.log(onColor);
	return onColor;
};
