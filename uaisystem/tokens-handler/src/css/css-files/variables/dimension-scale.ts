import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {ScaleDimension} from '@uaisystem/design-tokens';
import {ScaleDimensionsType, ScaleDimensionsZodSchema} from '@uaisystem/types';

function generateCssVariables(json: ScaleDimensionsType): string {
  const validatedJson = ScaleDimensionsZodSchema.parse(json);
  const prefix = '--uai-dimension';
  const baseFontSize = 16;

  let cssVariables = '';

  for (const [scaleName, dimensionStops] of Object.entries(validatedJson)) {
    for (const [stopName, dimensionValue] of Object.entries(dimensionStops)) {
      const variableName = `${ConvertSnakeCaseToKebabCase(
        scaleName
      )}-${stopName}`;
      cssVariables += `${prefix}-${variableName}: ${
        dimensionValue / baseFontSize
      }rem;\n`;
    }
  }

  return cssVariables;
}

export const ScaleDimensionsVariables = generateCssVariables(ScaleDimension);

// Test
//console.log(ScaleDimensionsVariables);
