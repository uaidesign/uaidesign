import {CoreColorsVariables} from '@/utils/enums';
import {SnakeCaseRegex} from '@/utils/regex';
import {z} from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const ColorCustomStopNameZodSchema = z
  .string()
  .regex(SnakeCaseRegex, 'The stop name must be in snake_case.')
  .min(1, 'The stop name must be defined.')
  .describe('Custom color stop name.');

const ColorReferenceZodSchema = z
  .enum(CoreColorsVariables)
  .describe('Reference to a core color.');

const ColorStopsZodSchema = z
  .record(ColorCustomStopNameZodSchema, ColorReferenceZodSchema)
  .describe('Object with custom stops of the color.');

const ColorNameZodSchema = z
  .string()
  .regex(SnakeCaseRegex, 'The color name must be in snake_case.')
  .min(1, 'The color name must be defined.')
  .describe('Color name.');

const ReferenceOptionsZodSchema = z.union([
  ColorStopsZodSchema,
  ColorReferenceZodSchema,
]);

// zod schema
export const SemanticColorsZodSchema = z.record(
  ColorNameZodSchema,
  ReferenceOptionsZodSchema
);

// extract the inferred type
export type SemanticColorsType = z.infer<typeof SemanticColorsZodSchema>;

// export json schema
export const SemanticColorsJsonSchema = zodToJsonSchema(
  SemanticColorsZodSchema,
  {
    definitions: {
      ColorCustomStopNameZodSchema,
      ColorReferenceZodSchema,
      ColorStopsZodSchema,
      ColorNameZodSchema,
    },
    target: 'jsonSchema2019-09',
  }
);
