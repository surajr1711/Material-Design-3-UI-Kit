import React, { useState } from "react";
import { State } from "../../styles/interactionStates";

export type EventHandlers = {
	// onClick: React.MouseEventHandler;
	onMouseDown: React.MouseEventHandler;
	onMouseUp: React.MouseEventHandler;
	onMouseEnter: React.MouseEventHandler;
	onMouseLeave: React.MouseEventHandler;
	onFocus: React.FocusEventHandler;
	onDragStart: React.DragEventHandler;
	onDragEnd: React.DragEventHandler;
};

const eventHandlerDefaults = {
	// onClick: () => {},
	onMouseDown: () => {},
	onMouseUp: () => {},
	onMouseEnter: () => {},
	onMouseLeave: () => {},
	onFocus: () => {},
	onDragStart: () => {},
	onDragEnd: () => {},
};

// UseinteractionHandlers takes 2 arguments. arg1=userState or initialState, arg2=object of user supplied eventhandlers
export const useInteractionHandlers = (
	// Object destructuring and default values
	userState: State = "enabled",
	// disabled: Boolean = false,
	eventHandlers: Partial<EventHandlers> = eventHandlerDefaults
): {
	// Function return type
	interactionState: State;
	setInteractionState: React.Dispatch<State>;
	eventHandlers: Partial<EventHandlers>;
} => {
	const [state, setState] = useState<State>(userState);
	// const [state, setState] = useState<State>(userState);

	const {
		// onClick,
		onMouseUp,
		onMouseDown,
		onMouseEnter,
		onMouseLeave,
		onFocus,
		onDragStart,
		onDragEnd,
	} = eventHandlers;

	// const handleClick: React.MouseEventHandler = (e) => {
	// 	setState("pressed");
	// 	if (onClick) onClick(e);
	// };
	const handleMouseDown: React.MouseEventHandler = (e) => {
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		setState("pressed");
		if (onMouseDown) onMouseDown(e);
	};
	const handleMouseUp: React.MouseEventHandler = (e) => {
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		setState("hover");
		if (onMouseUp) onMouseUp(e);
	};
	const handleMouseEnter: React.MouseEventHandler = (e) => {
		setState("hover");
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		if (onMouseEnter) onMouseEnter(e);
	};
	const handleMouseLeave: React.MouseEventHandler = (e) => {
		setState("enabled");
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		if (onMouseLeave) onMouseLeave(e);
	};
	const handleFocus: React.FocusEventHandler = (e) => {
		setState("focus");
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		if (onFocus) onFocus(e);
	};
	const handleDragStart: React.DragEventHandler = (e) => {
		setState("dragged");
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		if (onDragStart) onDragStart(e);
	};
	const handleDragEnd: React.DragEventHandler = (e) => {
		if (state === "disabled") return;
		// console.log(e.type, "from hook");
		setState("hover");
		if (onDragEnd) onDragEnd(e);
	};

	return {
		interactionState: state,
		setInteractionState: setState,
		eventHandlers: {
			// onClick: handleClick,
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave,
			onFocus: handleFocus,
			onMouseDown: handleMouseDown,
			onMouseUp: handleMouseUp,
			onDragStart: handleDragStart,
			onDragEnd: handleDragEnd,
		},
	};
};
