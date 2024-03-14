import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {ExtraDimension, ScaleDimension} from '@uaisystem/design-tokens';
import {
  ExtraDimensionsType,
  ExtraDimensionsZodSchema,
  ScaleDimensionsType,
  ScaleDimensionsZodSchema,
} from '@uaisystem/types';

type ConfigType = Record<string, string[]>;

const Config: ConfigType = {
  p: ['padding'],
  ph: ['padding-left', 'padding-right'],
  pv: ['padding-top', 'padding-bottom'],
  pt: ['padding-top'],
  pr: ['padding-right'],
  pb: ['padding-bottom'],
  pl: ['padding-left'],
};

function generateDimensionCssClasses(
  config: ConfigType,
  scaleJson: ScaleDimensionsType,
  extraJson: ExtraDimensionsType
): string {
  const validatedScaleJson = ScaleDimensionsZodSchema.parse(scaleJson);
  const validatedExtraJson = ExtraDimensionsZodSchema.parse(extraJson);
  const prefix = '--uai-dimension';

  let classes = '';

  for (const [className, params] of Object.entries(config)) {
    for (const [scaleName, stops] of Object.entries(validatedScaleJson)) {
      for (const [stopName] of Object.entries(stops)) {
        const fullClassName = `${className}-${ConvertSnakeCaseToKebabCase(
          scaleName
        )}-${stopName}`;
        const variableName = `var(${prefix}-${ConvertSnakeCaseToKebabCase(
          scaleName
        )}-${ConvertSnakeCaseToKebabCase(stopName)})`;

        classes += `.${fullClassName} {\n`;
        params.forEach(param => {
          classes += `${param}: ${variableName};\n`;
        });
        classes += '}\n';
      }
    }

    for (const [dimensionName] of Object.entries(validatedExtraJson)) {
      const fullClassName = `${className}-${ConvertSnakeCaseToKebabCase(
        dimensionName
      )}`;
      const variableName = `var(${prefix}-${ConvertSnakeCaseToKebabCase(
        dimensionName
      )})`;

      classes += `.${fullClassName} {\n`;
      params.forEach(param => {
        classes += `${param}: ${variableName};\n`;
      });
      classes += '}\n';
    }
  }

  return classes;
}

export const DimensionCssClasses = generateDimensionCssClasses(
  Config,
  ScaleDimension,
  ExtraDimension
);

// Test
//console.log(DimensionCssClasses);
