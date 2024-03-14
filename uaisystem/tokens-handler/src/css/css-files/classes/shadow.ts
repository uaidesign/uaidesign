import {Shadow} from '@uaisystem/design-tokens';
import {ShadowsType, ShadowsZodSchema} from '@uaisystem/types';

function generateShadowCssClasses(json: ShadowsType): string {
  const validatedJson = ShadowsZodSchema.parse(json);
  const colorPrefix = '--uai-color';
  const dimensionPrefix = '--uai-dimension';

  let classes = '';

  for (const [shadowName, params] of Object.entries(validatedJson)) {
    const x = `var(${dimensionPrefix}-${params.x})`;
    const y = `var(${dimensionPrefix}-${params.y})`;
    const blur = `var(${dimensionPrefix}-${params.blur})`;
    const spread = `var(${dimensionPrefix}-${params.spread})`;
    const color = `var(${colorPrefix}-${params.color})`;

    classes += `.shadow-${shadowName} {\n`;
    classes += `box-shadow: ${x} ${y} ${blur} ${spread} ${color};\n`;
    classes += '}\n';

    classes += `.shadow-minus-${shadowName} {\n`;
    classes += `box-shadow: ${x} ${y} ${blur} ${spread} ${color} inset;\n`;
    classes += '}\n';
  }

  return classes;
}

export const ShadowCssClasses = generateShadowCssClasses(Shadow);

// Test
//console.log(ShadowCssClasses);
