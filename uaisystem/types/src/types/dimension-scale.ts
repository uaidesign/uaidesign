import {z} from 'zod';
import zodToJsonSchema from 'zod-to-json-schema';

const DimensionValueZodSchema = z
  .number()
  .min(1, 'The dimension value must be defined.')
  .describe('Pixels dimension value.');

const StopNameZodSchema = z
  .string()
  .regex(/^[0-9]*$/, 'The stop name must be a number in the sequence.')
  .min(1, 'The stop name must be defined.')
  .describe('Dimension stop number.');

const ScaleStopsZodSchema = z
  .record(StopNameZodSchema, DimensionValueZodSchema)
  .describe('Dimension stops of the scale.');

// zod schema
export const ScaleDimensionsZodSchema = z
  .object({major_scale: ScaleStopsZodSchema, minor_scale: ScaleStopsZodSchema})
  .describe('Scale dimensions.');

// extract the inferred type
export type ScaleDimensionsType = z.infer<typeof ScaleDimensionsZodSchema>;

// export json schema
export const ScaleDimensionsJsonSchema = zodToJsonSchema(
  ScaleDimensionsZodSchema,
  {
    definitions: {
      DimensionValueZodSchema,
      StopNameZodSchema,
      ScaleStopsZodSchema,
    },
    target: 'jsonSchema2019-09',
  }
);
