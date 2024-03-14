import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {CoreColors} from '@uaisystem/design-tokens';
import {CoreColorsType, CoreColorsZodSchema} from '@uaisystem/types';

function generateCssVariables(json: CoreColorsType): {
  light: string;
  dark: string;
} {
  const validatedJson = CoreColorsZodSchema.parse(json);
  const prefix = '--uai-color';

  let light = '';
  let dark = '';

  for (const [colorName, colorStops] of Object.entries(validatedJson)) {
    for (const [lightnessStop, colorValues] of Object.entries(colorStops)) {
      const variableName = `${prefix}-${ConvertSnakeCaseToKebabCase(
        colorName
      )}-${lightnessStop}`;
      light += `${variableName}: ${colorValues.light};\n`;
    }
  }

  for (const [colorName, colorStops] of Object.entries(validatedJson)) {
    for (const [lightnessStop, colorValues] of Object.entries(colorStops)) {
      const variableName = `${prefix}-${ConvertSnakeCaseToKebabCase(
        colorName
      )}-${lightnessStop}`;
      dark += `${variableName}: ${colorValues.dark};\n`;
    }
  }

  return {light, dark};
}

export const CoreColorsVariables = generateCssVariables(CoreColors);

// Test
//console.log('LIGHT:');
//console.log(CoreColorsVariables.light);
//console.log('DARK:');
//console.log(CoreColorsVariables.dark);
