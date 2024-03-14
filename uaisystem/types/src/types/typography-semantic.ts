import {
  MinorScaleDimensionsVariables,
  TypographyFamiliesVariables,
  TypographyLeadingVariables,
  TypographyTrackingVariables,
  TypographyWeightsVariables,
} from '@/utils/enums';
import {NumbersRegex, SnakeCaseRegex} from '@/utils/regex';
import {z} from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const FamilyReferenceZodSchema = z
  .enum(TypographyFamiliesVariables)
  .describe('Reference to a core typography family.');

const WeightReferenceZodSchema = z
  .enum(TypographyWeightsVariables)
  .describe('Reference to a core typography weight.');

const TrackingReferenceZodSchema = z
  .enum(TypographyTrackingVariables)
  .describe('Reference to a core typography tracking.');

const LeadingReferenceZodSchema = z
  .enum(TypographyLeadingVariables)
  .describe('Reference to a core typography leading.');

const SizeStopNameZodSchema = z
  .string()
  .regex(NumbersRegex, 'The stop name must be a number in the sequence.')
  .min(1, 'The stop name must be defined.')
  .describe('Size stop name.');

const SizeReferenceZodSchema = z
  .enum(MinorScaleDimensionsVariables)
  .describe('Reference to a minor scale dimension.');

const SizeZodSchema = z
  .record(SizeStopNameZodSchema, SizeReferenceZodSchema)
  .describe('Size stops.');

const TypographyNameZodSchema = z
  .string()
  .regex(SnakeCaseRegex, 'The typography name must be in snake_case.')
  .min(1, 'The typography name must be defined.')
  .describe('Typography name.');

const TypographyParamsZodSchema = z
  .object({
    family: FamilyReferenceZodSchema,
    weight: WeightReferenceZodSchema,
    tracking: TrackingReferenceZodSchema,
    leading: LeadingReferenceZodSchema,
    size: SizeZodSchema,
  })
  .describe('Typography params.');

// zod schema
export const SemanticTypographyZodSchema = z.record(
  TypographyNameZodSchema,
  TypographyParamsZodSchema
);

// extract the inferred type
export type SemanticTypographyType = z.infer<
  typeof SemanticTypographyZodSchema
>;

// export json schema
export const SemanticTypographyJsonSchema = zodToJsonSchema(
  SemanticTypographyZodSchema,
  {
    definitions: {
      FamilyReferenceZodSchema,
      WeightReferenceZodSchema,
      TrackingReferenceZodSchema,
      LeadingReferenceZodSchema,
      SizeStopNameZodSchema,
      SizeReferenceZodSchema,
      SizeZodSchema,
      TypographyNameZodSchema,
      TypographyParamsZodSchema,
    },
    target: 'jsonSchema2019-09',
  }
);
