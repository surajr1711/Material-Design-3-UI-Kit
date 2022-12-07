import { ButtonColor, ButtonContentColor, ButtonVariant } from "./Button.types";

type UseButtonContentColor = (variant: ButtonVariant, color: ButtonColor, disabled: boolean) => ButtonContentColor;

export const useButtonContentColor: UseButtonContentColor = (variant, color, disabled) => {
	if (disabled) {
		return "onSurface";
	}
	switch (variant) {
		case "outlined":
		case "text":
		case "elevated":
			return color;
		case "tonal":
			return `on${color!.charAt(0).toUpperCase() + color!.slice(1)}Container` as ButtonContentColor;
		// undefined and filled
		default:
			return `on${color!.charAt(0).toUpperCase() + color!.slice(1)}` as ButtonContentColor;
	}
};
