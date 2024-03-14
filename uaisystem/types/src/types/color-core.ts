import {HexColorRegex, SnakeCaseRegex} from '@/utils/regex';
import {z} from 'zod';
import {zodToJsonSchema} from 'zod-to-json-schema';

const HexColorZodSchema = z
  .string()
  .regex(HexColorRegex, 'The color value must be in hex and UPPERCASE')
  .min(7, 'The color value must be defined.')
  .describe('Hex color value.');

const ColorValuesZodSchema = z
  .object({
    light: HexColorZodSchema,
    dark: HexColorZodSchema,
  })
  .describe('Stop color pair. Values for light and dark theme.');

const ColorStopsZodSchema = z
  .object({
    0: ColorValuesZodSchema,
    3: ColorValuesZodSchema,
    6: ColorValuesZodSchema,
    10: ColorValuesZodSchema,
    20: ColorValuesZodSchema,
    30: ColorValuesZodSchema,
    40: ColorValuesZodSchema,
    50: ColorValuesZodSchema,
    60: ColorValuesZodSchema,
    70: ColorValuesZodSchema,
    80: ColorValuesZodSchema,
    90: ColorValuesZodSchema,
    100: ColorValuesZodSchema,
  })
  .describe('The 13 lightness stops of the color.');

const ColorNameZodSchema = z
  .string()
  .regex(SnakeCaseRegex, 'The color name must be in snake_case.')
  .min(1, 'The color name must be defined.')
  .describe('Color name.');

// zod schema
export const CoreColorsZodSchema = z.record(
  ColorNameZodSchema,
  ColorStopsZodSchema
);

// extract the inferred type
export type CoreColorsType = z.infer<typeof CoreColorsZodSchema>;

// export json schema
export const CoreColorsJsonSchema = zodToJsonSchema(CoreColorsZodSchema, {
  definitions: {
    HexColorZodSchema,
    ColorValuesZodSchema,
    ColorStopsZodSchema,
    ColorNameZodSchema,
  },
  target: 'jsonSchema2019-09',
});
