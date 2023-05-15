import { OptionData } from "./SegmentedButtons.types";

export const optionsStub: OptionData[] = [
	{
		id: "option1",
		label: "Some long name options",
		icon: "star_outline",
	},
	{
		id: "option2",
		label: "Option 2",
		icon: "square",
		// defaultChecked: true,
		checked: true,
	},
	{
		id: "option3",
		// label: "Option 3",
		icon: "circle",
		//  defaultChecked: true,
		checked: true,
	},
	{
		id: "option4",
		label: "Option 4",
		icon: "change_history",
		// handleChange: () => console.log("Hello! from user-provided 'handlechange()' for item-id 'option4' of 'options' array.")
	},
];
