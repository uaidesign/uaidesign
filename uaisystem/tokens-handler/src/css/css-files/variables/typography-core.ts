import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {CoreTypography} from '@uaisystem/design-tokens';
import {CoreTypographyType, CoreTypographyZodSchema} from '@uaisystem/types';

function generateCssVariables(json: CoreTypographyType): string {
  const validatedJson = CoreTypographyZodSchema.parse(json);
  const prefix = '--uai-typography';

  let cssVariables = '';

  for (const [typographyParam, paramStops] of Object.entries(validatedJson)) {
    for (const [stopName, stopValue] of Object.entries(paramStops)) {
      // eslint-disable-next-line max-len
      const variableName = `${prefix}-${typographyParam}-${ConvertSnakeCaseToKebabCase(
        stopName
      )}`;
      cssVariables += `${variableName}: ${stopValue};\n`;
    }
  }

  return cssVariables;
}

export const CoreTypographyVariables = generateCssVariables(CoreTypography);

// Test
//console.log(CoreTypographyVariables);
