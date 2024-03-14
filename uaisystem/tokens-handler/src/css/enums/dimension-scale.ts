import {ScaleDimension} from '@uaisystem/design-tokens';
import {ScaleDimensionsType, ScaleDimensionsZodSchema} from '@uaisystem/types';

function generateVariablesEnum(json: ScaleDimensionsType): string {
  const validatedJson = ScaleDimensionsZodSchema.parse(json);

  let variablesEnum = '';

  variablesEnum += 'export const MajorScaleDimensionsVariables = [\n';

  const majorLength = Object.entries(validatedJson.major_scale).length;
  for (let i = 1; i <= majorLength; i++) {
    variablesEnum += `'major-scale-${i}',\n`;
  }

  variablesEnum += '] as const;\n';

  variablesEnum += 'export const MinorScaleDimensionsVariables = [\n';

  const minorLength = Object.entries(validatedJson.minor_scale).length;
  for (let i = 1; i <= minorLength; i++) {
    variablesEnum += `'minor-scale-${i}',\n`;
  }

  variablesEnum += '] as const;\n';

  return variablesEnum;
}

export const ScaleDimensionsEnum = generateVariablesEnum(ScaleDimension);

// Test
//console.log(ScaleDimensionsEnum);
