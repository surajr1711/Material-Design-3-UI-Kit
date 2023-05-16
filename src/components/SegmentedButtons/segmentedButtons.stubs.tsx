import { OptionData } from "./SegmentedButtons.types";

export const defaultOptions: OptionData[] = [
	{
		id: "option1",
		label: "Option 1",
		icon: "star_outline",
	},
	{
		id: "option2",
		label: "Option 2",
		icon: "square",
		checked: true,
	},
	{
		id: "option3",
		label: "Option 3",
		icon: "circle",
		checked: true,
	},
	{
		id: "option4",
		label: "Option 4",
		icon: "change_history",
		// handleChange: () => console.log("Hello! from user-provided 'handlechange()' for item-id 'option4' of 'options' array.")
	},
];

export const multiOptions: OptionData[] = [
	{
		id: "entry",
		label: "Entry",
		icon: "looks_one",
	},
	{
		id: "casual",
		label: "Casual",
		icon: "looks_two",
		checked: true,
	},
	{
		id: "enthusiast",
		label: "Enthusiast",
		icon: "looks_3",
		checked: true,
	},
	{
		id: "ultra",
		label: "Ultra",
		icon: "looks_4",
	},
];

export const calendarOptions: OptionData[] = [
	{
		id: "day",
		label: "Day",
		icon: "star_outline",
	},
	{
		id: "week",
		label: "Week",
		icon: "square",
		checked: true,
	},
	{
		id: "month",
		label: "Month",
		icon: "circle",
		checked: true,
	},
];

export const commuteOptions: OptionData[] = [
	{
		id: "walking",
		label: "Walking",
		icon: "directions_walk",
	},
	{
		id: "transit",
		label: "Transit",
		icon: "directions_transit",
	},
	{
		id: "driving",
		label: "Driving",
		icon: "directions_car",
		checked: true,
	},
];

export const libraryOptions: OptionData[] = [
	{
		id: "favorites",
		label: "Favorites",
		icon: "star_outline",
	},
	{
		id: "trending",
		label: "Trending",
		icon: "trending_up",
	},
	{
		id: "saved",
		label: "Saved",
		icon: "bookmark_border",
		checked: true,
	},
];
