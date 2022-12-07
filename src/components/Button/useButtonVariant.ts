import {
	StyledButton,
	StyledElevatedButton,
	StyledFilledButton,
	StyledOutlinedButton,
	StyledTextButton,
	StyledTonalButton,
} from "./Button.styles";

type UseButtonVariant = (variant: string) => typeof StyledButton;

export const useButtonVariant: UseButtonVariant = (variant) => {
	switch (variant) {
		case "outlined":
			return StyledOutlinedButton;
		case "elevated":
			return StyledElevatedButton;
		case "text":
			return StyledTextButton;
		case "tonal":
			return StyledTonalButton;
		// undefined and filled
		default:
			return StyledFilledButton;
	}
};
