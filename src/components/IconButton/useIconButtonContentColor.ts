import { IconButtonVariant, IconButtonContentColor } from "./IconButton.types";

type UseIconButtonContentColor = (
	variant: IconButtonVariant | undefined,
	toggleable: boolean | undefined,
	toggledOn: boolean,
	disabled: boolean | undefined
) => IconButtonContentColor;

export const useIconButtonContentColor: UseIconButtonContentColor = (variant, toggleable, toggledOn, disabled) => {
	if (disabled === true) {
		return "onSurface";
	}
	switch (variant) {
		case "outlined":
			return !toggleable || !toggledOn ? "onSurfaceVariant" : "onInverseSurface";
		case "tonal":
			return !toggleable || toggledOn ? "onSecondaryContainer" : "onSurfaceVariant";
		case "standard":
			return !toggleable || !toggledOn ? "onSurfaceVariant" : "primary";
		// filled and undefined
		default:
			return !toggleable || toggledOn ? "onPrimary" : "primary";
	}
};
