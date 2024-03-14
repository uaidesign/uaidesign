import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {ExtraDimension} from '@uaisystem/design-tokens';
import {ExtraDimensionsType, ExtraDimensionsZodSchema} from '@uaisystem/types';

function generateCssVariables(json: ExtraDimensionsType): string {
  const validatedJson = ExtraDimensionsZodSchema.parse(json);
  const prefix = '--uai-dimension';

  let cssVariables = '';

  for (const [dimensionName, dimensionValue] of Object.entries(validatedJson)) {
    const variableName = `${prefix}-${ConvertSnakeCaseToKebabCase(
      dimensionName
    )}`;
    cssVariables += `${variableName}: ${dimensionValue};\n`;
  }

  return cssVariables;
}

export const ExtraDimensionsVariables = generateCssVariables(ExtraDimension);

// Test
//console.log(ExtraDimensionsVariables);
