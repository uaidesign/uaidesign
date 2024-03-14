import {SemanticTypography} from '@uaisystem/design-tokens';
import {
  SemanticTypographyType,
  SemanticTypographyZodSchema,
} from '@uaisystem/types';

function generateTypographyCssClasses(json: SemanticTypographyType): string {
  const validatedJson = SemanticTypographyZodSchema.parse(json);
  const typePrefix = '--uai-typography';
  const dimensionPrefix = '--uai-dimension';

  let classes = '';

  for (const [typographyName, params] of Object.entries(validatedJson)) {
    const family = `var(${typePrefix}-${params.family})`;
    const weight = `var(${typePrefix}-${params.weight})`;
    const tracking = `var(${typePrefix}-${params.tracking})`;
    const leading = `var(${typePrefix}-${params.leading})`;

    for (const [stop, sizeReference] of Object.entries(params.size)) {
      const className = `${typographyName}-${stop}`;
      const size = `var(${dimensionPrefix}-${sizeReference})`;

      classes += `.${className} {\n`;
      classes += `font-family: ${family};\n`;
      classes += `font-weight: ${weight};\n`;
      classes += `letter-spacing: ${tracking};\n`;
      classes += `line-height: ${leading};\n`;
      classes += `font-size: ${size};\n`;
      classes += '}\n';
    }
  }

  return classes;
}

export const TypographyCssClasses =
  generateTypographyCssClasses(SemanticTypography);

// Test
//console.log(TypographyCssClasses);
