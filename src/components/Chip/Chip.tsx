import { ChipOverload } from "./Chip.types";
import AssistChip from "./AssistChip";
import FilterChip from "./FilterChip";
import InputChip from "./InputChip";
import SuggestionChip from "./SuggestionChip";

const componentMap = {
	assist: AssistChip,
	filter: FilterChip,
	input: InputChip,
	suggestion: SuggestionChip,
};

const Chip: ChipOverload = (type) => {
	return componentMap[type as keyof typeof componentMap];
};

export default Chip;
