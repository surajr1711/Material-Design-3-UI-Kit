import { createContext, useContext } from "react";
import { ShowIconOrLabel } from "./SegmentedButtons.types";

// create group name context
export type SegButtonsContextObj = {
	groupName: string;
	inputType: "radio" | "checkbox";
	showIconOrLabel: ShowIconOrLabel;
};

export const SegButtonsContext = createContext<SegButtonsContextObj | null>(null);

export const useSegButtonsContext = (): SegButtonsContextObj => {
	const context = useContext(SegButtonsContext);
	if (!context) {
		throw new Error("SegmentedButton must be used within SegmentedButtons wrapper.");
	}
	return context;
};
