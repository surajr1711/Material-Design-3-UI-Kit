import { DialogSupportingTextProps } from "./Dialog.types";
import Text from "../Text";
import { basicDialogColors, basicDialogLayout } from "./BasicDialog.styles";

const DialogSupportingText = ({ tag = "span", children, ...restProps }: DialogSupportingTextProps) => (
	<Text
		color={basicDialogColors.supportingText}
		typescale={basicDialogLayout.supportingText}
		children={children}
		tag={tag}
		{...restProps}
	/>
);

export default DialogSupportingText;
