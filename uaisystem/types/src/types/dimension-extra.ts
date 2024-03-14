import {ExtraDimensionValueRegex, SnakeCaseRegex} from '@/utils/regex';
import {z} from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const DimensionValueZodSchema = z
  .string()
  .regex(
    ExtraDimensionValueRegex,
    'The dimension value must be in px, % or vh. And the format must be explicit'
  )
  .min(1, 'The dimension value must be defined.')
  .describe('Pixels dimension value.');

const DimensionNameZodSchema = z
  .string()
  .regex(SnakeCaseRegex, 'The scale name must be in snake_case.')
  .min(1, 'The scale name must be defined')
  .describe('Scale name.');

export const ExtraDimensionsZodSchema = z
  .record(DimensionNameZodSchema, DimensionValueZodSchema)
  .describe('Scale dimensions.');

// extract the inferred type
export type ExtraDimensionsType = z.infer<typeof ExtraDimensionsZodSchema>;

// export json schema
export const ExtraDimensionsJsonSchema = zodToJsonSchema(
  ExtraDimensionsZodSchema,
  {
    definitions: {
      DimensionValueZodSchema,
      DimensionNameZodSchema,
    },
    target: 'jsonSchema2019-09',
  }
);
