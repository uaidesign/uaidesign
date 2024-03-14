import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {SemanticColors} from '@uaisystem/design-tokens';
import {SemanticColorsType, SemanticColorsZodSchema} from '@uaisystem/types';

type ConfigType = Record<string, string[]>;

const Config: ConfigType = {
  bg: ['background'],
  text: ['color'],
  'border-in': ['border-color'],
  'border-out': ['outline-color'],
};

function generateDimensionCssClasses(
  config: ConfigType,
  json: SemanticColorsType
): string {
  const validatedJson = SemanticColorsZodSchema.parse(json);
  const prefix = '--uai-color';

  let classes = '';

  for (const [className, params] of Object.entries(config)) {
    for (const [colorName, referenceOptions] of Object.entries(validatedJson)) {
      if (typeof referenceOptions === 'string') {
        const fullClassName = `${className}-${ConvertSnakeCaseToKebabCase(
          colorName
        )}`;
        const variableName = `var(${prefix}-${ConvertSnakeCaseToKebabCase(
          colorName
        )})`;

        classes += `.${fullClassName} {\n`;
        params.forEach(param => {
          classes += `${param}: ${variableName};\n`;
        });
        classes += '}\n';
      } else {
        for (const [colorStop] of Object.entries(referenceOptions)) {
          const fullClassName = `${className}-${ConvertSnakeCaseToKebabCase(
            colorName
          )}-${ConvertSnakeCaseToKebabCase(colorStop)}`;
          const variableName = `var(${prefix}-${ConvertSnakeCaseToKebabCase(
            colorName
          )}-${ConvertSnakeCaseToKebabCase(colorStop)})`;

          classes += `.${fullClassName} {\n`;
          params.forEach(param => {
            classes += `${param}: ${variableName};\n`;
          });
          classes += '}\n';
        }
      }
    }
  }

  return classes;
}

export const ColorCssClasses = generateDimensionCssClasses(
  Config,
  SemanticColors
);

// Test
//console.log(ColorCssClasses);
