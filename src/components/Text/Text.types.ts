import {
	BaseColor,
	baseColorKeys,
	OnBaseColor,
	onBaseColorKeys,
	OnContainerColor,
	onContainerColorKeys,
	OnNeutralColor,
	onNeutralColorKeys,
} from "../../styles/colors";
import { Typescale } from "../../styles/typescale";

export const textTag = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "label"] as const;
export type TextTag = typeof textTag[number];

export type TextColor = BaseColor | OnBaseColor | OnContainerColor | OnNeutralColor;
export const textColorKeys: TextColor[] = [
	...baseColorKeys,
	...onBaseColorKeys,
	...onContainerColorKeys,
	...onNeutralColorKeys,
];

export interface TextProps {
	children?: string | number;
	render?: boolean;
	typescale?: Typescale;
	color?: TextColor;
	tag?: TextTag;
}

// // Polymorphic refs
// // ===================
// // Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// // A more precise version of just React.ComponentPropsWithoutRef on its own
// export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
// 	JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

// type AsProp<C extends React.ElementType> = {
// 	/**
// 	 * An override of the default HTML tag.
// 	 * Can also be another React component.
// 	 */
// 	as?: C;
// };

// /**
//  * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
//  * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
//  * set of props.
//  */
// export type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
// 	Omit<ExtendedProps, keyof OverrideProps>;

// /**
//  * Allows for inheriting the props from the specified element type so that
//  * props like children, className & style work, as well as element-specific
//  * attributes like aria roles. The component (`C`) must be passed in.
//  */
// export type InheritableElementProps<C extends React.ElementType, Props = {}> = ExtendableProps<PropsOf<C>, Props>;

// /**
//  * A more sophisticated version of `InheritableElementProps` where
//  * the passed in `as` prop will determine which props can be included
//  */
// export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = InheritableElementProps<
// 	C,
// 	Props & AsProp<C>
// >;

// /**
//  * Utility type to extract the `ref` prop from a polymorphic component
//  */
// export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
// /**
//  * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
//  * prop for the polymorphic component
//  */
// export type PolymorphicComponentPropsWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProps<
// 	C,
// 	Props
// > & { ref?: PolymorphicRef<C> };

// // 👇🏾👇🏾 sample usage in `Text` component 👇🏾👇🏾

// export interface Props {
// 	children?: string | number;
// 	render?: boolean;
// 	typescale?: Typescale;
// 	color?: TextColor;
// }

// export type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;
