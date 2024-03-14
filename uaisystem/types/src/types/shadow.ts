import {
  ExtraDimensionsVariables,
  MinorScaleDimensionsVariables,
  SemanticColorsVariables,
} from '@/utils/enums';
import {NumbersRegex} from '@/utils/regex';
import {z} from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const ColorReferenceZodSchema = z
  .enum(SemanticColorsVariables)
  .describe('Reference to a semantic color.');

const MinorAndExtraDimensionsVariables = [
  ...MinorScaleDimensionsVariables,
  ...ExtraDimensionsVariables,
] as const;

const XValueZodSchema = z
  .enum(MinorAndExtraDimensionsVariables)
  .describe('Reference to a minor scale dimension.');

const YValueZodSchema = z
  .enum(MinorAndExtraDimensionsVariables)
  .describe('Reference to a minor scale dimension.');

const BlurValueZodSchema = z
  .enum(MinorAndExtraDimensionsVariables)
  .describe('Reference to a minor scale dimension.');

const SpreadValueZodSchema = z
  .enum(MinorAndExtraDimensionsVariables)
  .describe('Reference to a minor scale dimension.');

const ShadowStopNameZodSchema = z
  .string()
  .regex(NumbersRegex, 'The stop name must be a number in the sequence.')
  .min(1, 'The stop name must be defined.')
  .describe('Shadow stop name.');

const ShadowStopParamsZodSchema = z
  .object({
    color: ColorReferenceZodSchema,
    x: XValueZodSchema,
    y: YValueZodSchema,
    blur: BlurValueZodSchema,
    spread: SpreadValueZodSchema,
  })
  .describe('Values to the CSS shadow params.');

// zod schema
export const ShadowsZodSchema = z.record(
  ShadowStopNameZodSchema,
  ShadowStopParamsZodSchema
);

// extract the inferred type
export type ShadowsType = z.infer<typeof ShadowsZodSchema>;

// export json schema
export const ShadowsJsonSchema = zodToJsonSchema(ShadowsZodSchema, {
  definitions: {
    ColorReferenceZodSchema,
    XValueZodSchema,
    YValueZodSchema,
    BlurValueZodSchema,
    SpreadValueZodSchema,
    ShadowStopNameZodSchema,
    ShadowStopParamsZodSchema,
  },
  target: 'jsonSchema2019-09',
});
