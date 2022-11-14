import React from "react";
import { StyledBottomSheet } from "./BottomSheet.styles";

interface BottomSheetProps {
	children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
	return (
		<StyledBottomSheet>
			<div className="dragHandle" />
			{children}
		</StyledBottomSheet>
	);
};

export default BottomSheet;
