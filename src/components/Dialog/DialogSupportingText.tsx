import { DialogSupportingTextProps } from "./Dialog.types";
import Text from "../Text";
import { dialogColors, dialogLayout } from "./Dialog.style";

const DialogSupportingText = ({ tag = "span", children, ...restProps }: DialogSupportingTextProps) => (
	<Text
		color={dialogColors.supportingText}
		typescale={dialogLayout.supportingText}
		children={children}
		tag={tag}
		{...restProps}
	/>
);

export default DialogSupportingText;
