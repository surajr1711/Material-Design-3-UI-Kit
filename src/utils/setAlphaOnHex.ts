import { ColorTranslator } from "colortranslator";

type SetAlphaOnHexParams = (hex: string, alpha: number) => string;

// returns provided HEX code as HSL with alpha
export const setAlphaOnHex: SetAlphaOnHexParams = (hex, alpha): string => {
	return new ColorTranslator(hex).setA(alpha).HSLA;
};
