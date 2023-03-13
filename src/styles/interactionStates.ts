export const stateKeys = ["enabled", "disabled", "hover", "focus", "pressed", "dragged"] as const;
export type State = typeof stateKeys[number];

const componentStructure = ["container", "outline", "surfaceTint", "stateLayer", "content"];
type ComponentStructure = typeof componentStructure[number];

type ComponentState = { [T in State]: number };
const container: ComponentState = {
	enabled: 1,
	disabled: 0.12,
	hover: 1,
	focus: 1,
	pressed: 1,
	dragged: 1,
};
const outline: ComponentState = {
	...container,
};
const surfaceTint: ComponentState = {
	...container,
	disabled: 0,
};
const stateLayer: ComponentState = {
	enabled: 0.0,
	disabled: 0.0,
	hover: 0.08,
	focus: 0.12,
	pressed: 0.12,
	dragged: 0.16,
};
const content: ComponentState = {
	...container,
	disabled: 0.38,
};

type StateOpacity = {
	[T in ComponentStructure]: ComponentState;
};
export const stateOpacity: StateOpacity = {
	container,
	outline,
	surfaceTint,
	stateLayer,
	content,
};

// export const stateOpacity = {
// container: {
// 	disabled: 0.12,
// },
// outline: {
// 	disabled: 0.12,
// },
// surfaceTint: {
// 	disabled: 0.0,
// },
// stateLayer: {
// 	enabled: 0.0,
// 	disabled: 0.0,
// 	hover: 0.08,
// 	focus: 0.12,
// 	pressed: 0.12,
// 	dragged: 0.16,
// },
// content: {
// 	disabled: 0.38,
// },
// };

// for TS
// export type State = keyof typeof stateOpacity.stateLayer;

// for proptype
// export const stateKeys = Object.keys(stateOpacity.stateLayer) as State[];
