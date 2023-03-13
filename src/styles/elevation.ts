import { setAlphaOnHex } from "../utils/setAlphaOnHex";
import { color } from "./colors";

// For proptypes
export const elevationKeys = ["level0", "level1", "level2", "level3", "level4", "level5"] as const;
// export const elevationKeys = Object.keys(boxShadow) as Elevation[];

// For TS
export type Elevation = typeof elevationKeys[number];
// export type Elevation = keyof ElevationObj;

// Elevation Object type
type ElevationObj = {
	[K in Elevation]: number | string;
};

// BOX SHADOW
const boxShadow: ElevationObj = {
	level0: "none",
	level1: `0px 1px 2px ${setAlphaOnHex(color.shadow, 0.3)}, 0px 1px 3px 1px ${setAlphaOnHex(color.shadow, 0.15)}`,
	level2: `0px 1px 2px ${setAlphaOnHex(color.shadow, 0.3)}, 0px 2px 6px 2px ${setAlphaOnHex(color.shadow, 0.15)}`,
	level3: `0px 4px 8px 3px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 1px 3px ${setAlphaOnHex(color.shadow, 0.3)}`,
	level4: `0px 6px 10px 4px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 2px 3px ${setAlphaOnHex(color.shadow, 0.3)}`,
	level5: `0px 8px 12px 6px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 4px 4px ${setAlphaOnHex(color.shadow, 0.3)}`,
};
export const boxShadowDarkTheme: ElevationObj = {
	...boxShadow,
	level1: `0px 1px 3px 1px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 1px 2px ${setAlphaOnHex(color.shadow, 0.3)}`,
	level2: `0px 2px 6px 2px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 1px 2px ${setAlphaOnHex(color.shadow, 0.3)}`,
	level3: `0px 4px 8px 3px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 1px 3px ${setAlphaOnHex(color.shadow, 0.3)}`,
	level4: `0px 6px 10px 4px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 2px 3px ${setAlphaOnHex(color.shadow, 0.3)}`,
	level5: `0px 8px 12px 6px ${setAlphaOnHex(color.shadow, 0.15)}, 0px 4px 4px ${setAlphaOnHex(color.shadow, 0.3)}`,
};

// SURFACE TINT
// https://m3.material.io/styles/color/the-color-system/color-roles#c0cdc1ba-7e67-4d6a-b294-218f659ff648
// https://m3.material.io/styles/elevation/applying-elevation#8b0ddbc5-201f-441e-93e7-ea9daf260da1
const surfaceTintOpacity: ElevationObj = {
	level0: 0,
	level1: 0.05,
	level2: 0.08,
	level3: 0.11,
	level4: 0.12,
	level5: 0.14,
};

export const elevation = {
	boxShadow: {
		...boxShadow,
	},
	surfaceTintOpacity: {
		...surfaceTintOpacity,
	},
};
