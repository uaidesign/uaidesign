import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {SemanticColors} from '@uaisystem/design-tokens';
import {SemanticColorsType, SemanticColorsZodSchema} from '@uaisystem/types';

function generateVariablesEnum(json: SemanticColorsType): string {
  const validatedJson = SemanticColorsZodSchema.parse(json);

  let variablesEnum = '';

  variablesEnum += 'export const SemanticColorsVariables = [\n';

  for (const [colorName, referenceOptions] of Object.entries(validatedJson)) {
    if (typeof referenceOptions === 'string') {
      const variableName = `${ConvertSnakeCaseToKebabCase(colorName)}`;
      variablesEnum += `'${variableName}',\n`;
    } else {
      for (const [colorStop] of Object.entries(referenceOptions)) {
        const variableName = `${ConvertSnakeCaseToKebabCase(
          colorName
        )}-${ConvertSnakeCaseToKebabCase(colorStop)}`;
        variablesEnum += `'${variableName}',\n`;
      }
    }
  }

  variablesEnum += '] as const;\n';

  return variablesEnum;
}

export const SemanticColorsEnum = generateVariablesEnum(SemanticColors);

// Test
//console.log(SemanticColorsEnum);
