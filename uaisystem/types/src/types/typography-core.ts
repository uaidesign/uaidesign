import {
  DecimalsRegex,
  FontWeightRegex,
  NaturalDecimalsRegex,
  NumbersRegex,
  SnakeCaseRegex,
} from '@/utils/regex';
import {z} from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const FamilyNameZodSChema = z
  .string()
  .regex(SnakeCaseRegex, 'The family name must be in snake_case.')
  .min(1, 'The family name must be defined.')
  .describe('Typography family name.');

const FamilyValueZodSchema = z
  .string()
  .min(1, 'The family name must be defined.')
  .describe('Font families.');

const FamilyZodSchema = z.record(FamilyNameZodSChema, FamilyValueZodSchema);

const WeightNameZodSChema = z
  .string()
  .regex(SnakeCaseRegex, 'The weight name must be in snake_case.')
  .min(1, 'The weight name must be defined.')
  .describe('Typography weight name.');

const WeightValueZodSChema = z
  .string()
  .regex(FontWeightRegex, 'The weight name must be in snake_case.')
  .min(1, 'The weight value must be defined.')
  .describe('Typography weight value.');

const WeightZodSchema = z.record(WeightNameZodSChema, WeightValueZodSChema);

const TrackingNameZodSChema = z
  .string()
  .regex(NumbersRegex, 'The tracking name must be a number in the sequence.')
  .min(1, 'The tracking name must be defined.')
  .describe('Typography tracking name.');

const TrackingValueZodSChema = z
  .string()
  .regex(DecimalsRegex, 'The tracking value must be in decimals.')
  .min(1, 'The tracking value must be defined.')
  .describe('Typography tracking value.');

const TrackingZodSchema = z.record(
  TrackingNameZodSChema,
  TrackingValueZodSChema
);

const LeadingNameZodSChema = z
  .string()
  .regex(NumbersRegex, 'The leading name must be a number in the sequence.')
  .min(1, 'The leading name must be defined.')
  .describe('Typography leading name.');

const LeadingValueZodSChema = z
  .string()
  .regex(NaturalDecimalsRegex, 'The leading value must be in decimals.')
  .min(1, 'The leading value must be defined.')
  .describe('Typography leading value.');

const LeadingZodSchema = z.record(LeadingNameZodSChema, LeadingValueZodSChema);

// zod schema
export const CoreTypographyZodSchema = z.object({
  family: FamilyZodSchema,
  weight: WeightZodSchema,
  tracking: TrackingZodSchema,
  leading: LeadingZodSchema,
});

// extract the inferred type
export type CoreTypographyType = z.infer<typeof CoreTypographyZodSchema>;

// export json schema
export const CoreTypographyJsonSchema = zodToJsonSchema(
  CoreTypographyZodSchema,
  {
    definitions: {
      FamilyNameZodSChema,
      FamilyValueZodSchema,
      FamilyZodSchema,
      WeightNameZodSChema,
      WeightValueZodSChema,
      WeightZodSchema,
      TrackingNameZodSChema,
      TrackingValueZodSChema,
      TrackingZodSchema,
      LeadingNameZodSChema,
      LeadingValueZodSChema,
      LeadingZodSchema,
    },
    target: 'jsonSchema2019-09',
  }
);
