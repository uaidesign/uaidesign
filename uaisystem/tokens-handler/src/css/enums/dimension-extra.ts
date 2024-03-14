import {ExtraDimension} from '@uaisystem/design-tokens';
import {ExtraDimensionsType, ExtraDimensionsZodSchema} from '@uaisystem/types';

function generateVariablesEnum(json: ExtraDimensionsType): string {
  const validatedJson = ExtraDimensionsZodSchema.parse(json);

  let variablesEnum = '';

  variablesEnum += 'export const ExtraDimensionsVariables = [\n';

  for (const [dimensionName] of Object.entries(validatedJson)) {
    variablesEnum += `'extra-${dimensionName}',\n`;
  }

  variablesEnum += '] as const;\n';

  return variablesEnum;
}

export const ExtraDimensionsEnum = generateVariablesEnum(ExtraDimension);

// Test
//console.log(ExtraDimensionsEnum);
