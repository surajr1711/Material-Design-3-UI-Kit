const easingKeys = [
	"emphasized",
	"emphasizedDecelerate",
	"emphasizedAccelerate",
	"standard",
	"standardDecelerate",
	"standardAccelerate",
	"linear",
] as const;
type Easing = typeof easingKeys[number];

type EasingObj = { [T in Easing]: string };
const easing: EasingObj = {
	emphasized: "cubic-bezier(0.2, 0, 0, 1)",
	emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
	emphasizedAccelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
	standard: "cubic-bezier(0.2, 0, 0, 1)",
	standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
	standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",
	linear: "cubic-bezier(0, 0, 1, 1)",
};

const durationKeys = [
	"short1",
	"short2",
	"short3",
	"short4",
	"medium1",
	"medium2",
	"medium3",
	"medium4",
	"long1",
	"long2",
	"long3",
	"long4",
	"extraLong1",
	"extraLong2",
	"extraLong3",
	"extraLong4",
] as const;
type Duration = typeof durationKeys[number];

type DurationObj = { [T in Duration]: string };
const duration: DurationObj = {
	short1: "50ms",
	short2: "100ms",
	short3: "150ms",
	short4: "200ms",
	medium1: "250ms",
	medium2: "300ms",
	medium3: "350ms",
	medium4: "400ms",
	long1: "450ms",
	long2: "500ms",
	long3: "550ms",
	long4: "600ms",
	extraLong1: "700ms",
	extraLong2: "800ms",
	extraLong3: "900ms",
	extraLong4: "1000ms",
};

type MotionObj = { easing: EasingObj; duration: DurationObj };
const motion: MotionObj = {
	easing,
	duration,
};

// EXPORTS
export type { Easing, Duration };
export { easingKeys, durationKeys, motion };

/* // for TS
export type Easing = keyof typeof easing;
export type Duration = keyof typeof duration;

// for proptypes
export const easingKeys = Object.keys(easing) as Easing[];
export const durationKeys = Object.keys(duration) as Duration[];
 */
