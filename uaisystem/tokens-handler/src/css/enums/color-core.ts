import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {CoreColors} from '@uaisystem/design-tokens';
import {CoreColorsType, CoreColorsZodSchema} from '@uaisystem/types';

function generateVariablesEnum(json: CoreColorsType): string {
  const validatedJson = CoreColorsZodSchema.parse(json);

  let variablesEnum = '';

  variablesEnum += 'export const CoreColorsVariables = [\n';

  for (const [colorName, colorStops] of Object.entries(validatedJson)) {
    for (const [lightnessStop] of Object.entries(colorStops)) {
      const variableName = `${ConvertSnakeCaseToKebabCase(
        colorName
      )}-${lightnessStop}`;
      variablesEnum += `'${variableName}',\n`;
    }
  }

  variablesEnum += '] as const;\n';

  return variablesEnum;
}

export const CoreColorsEnum = generateVariablesEnum(CoreColors);

// Test
//console.log(CoreColorsEnum);
