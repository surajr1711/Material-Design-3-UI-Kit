import React from "react";
import { ListProps } from "./List.types";
import { StyledList } from "./List.styles";
import Text from "../Text/Text";

const List = React.forwardRef<HTMLUListElement, ListProps>(({ ...restProps }, ref) => {
	return (
		<StyledList ref={ref}>
			<li>
				<Text>List item 1</Text>
			</li>
			<li>
				<Text>List item 2</Text>
			</li>
			<li>
				<Text>List item 3</Text>
			</li>
		</StyledList>
	);
});

export default List;
