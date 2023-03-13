import {
	StyledFilledIconButton,
	StyledIconButton,
	StyledOutlinedIconButton,
	StyledStandardIconButton,
	StyledTonalIconButton,
} from "./IconButton.styles";

type UseIconButtonVariant = (variant: string | undefined) => typeof StyledIconButton;

export const useIconButtonVariant: UseIconButtonVariant = (variant) => {
	switch (variant) {
		case "tonal":
			return StyledTonalIconButton;
		case "outlined":
			return StyledOutlinedIconButton;
		case "standard":
			return StyledStandardIconButton;
		// filled and undefined
		default:
			return StyledFilledIconButton;
	}
};
