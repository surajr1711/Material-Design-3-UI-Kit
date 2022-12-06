import { VariantType, ContentColorType } from "./IconButton";

type UseContentColor = (
	variant: VariantType | undefined,
	toggleable: boolean | undefined,
	toggledOn: boolean,
	disabled: boolean | undefined
) => ContentColorType;

export const useContentColor: UseContentColor = (variant, toggleable, toggledOn, disabled) => {
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

	/* let contentColor: ContentColorType
		 if (!variant || variant === "filled") {
			Component = StyledFilledIconButton;
			contentColor = !toggleable || toggledOn ? "onPrimary" : "primary";
		} else if (variant === "tonal") {
			Component = StyledTonalIconButton;
			contentColor = !toggleable || toggledOn ? "onSecondaryContainer" : "onSurfaceVariant";
		} else if (variant === "outlined") {
			Component = StyledOutlinedIconButton;
			contentColor = !toggleable || !toggledOn ? "onSurfaceVariant" : "onInverseSurface";
		} else {
			Component = StyledStandardIconButton;
			contentColor = !toggleable || !toggledOn ? "onSurfaceVariant" : "primary";
		}

		if (props.disabled === true) {
			contentColor = "onSurface";
		} */
};
