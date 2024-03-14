import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {SemanticColors} from '@uaisystem/design-tokens';
import {SemanticColorsType, SemanticColorsZodSchema} from '@uaisystem/types';

function generateCssVariables(json: SemanticColorsType): string {
  const validatedJson = SemanticColorsZodSchema.parse(json);
  const prefix = '--uai-color';

  let cssVariables = '';

  for (const [colorName, referenceOptions] of Object.entries(validatedJson)) {
    if (typeof referenceOptions === 'string') {
      const colorReference = referenceOptions;
      const variableName = `${prefix}-${ConvertSnakeCaseToKebabCase(
        colorName
      )}`;
      cssVariables += `${variableName}: var(${prefix}-${colorReference});\n`;
    } else {
      for (const [colorStop, colorReference] of Object.entries(
        referenceOptions
      )) {
        const variableName = `${prefix}-${ConvertSnakeCaseToKebabCase(
          colorName
        )}-${ConvertSnakeCaseToKebabCase(colorStop)}`;
        cssVariables += `${variableName}: var(${prefix}-${colorReference});\n`;
      }
    }
  }

  return cssVariables;
}

export const SemanticColorsVariables = generateCssVariables(SemanticColors);

// Test
//console.log(SemanticColorsVariables);
