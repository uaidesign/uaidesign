import ConvertSnakeCaseToKebabCase from '@/utils/convert-snake-case-to-kebab-case';
import {CoreTypography} from '@uaisystem/design-tokens';
import {CoreTypographyType, CoreTypographyZodSchema} from '@uaisystem/types';

function generateVariablesEnum(json: CoreTypographyType): string {
  const validatedJson = CoreTypographyZodSchema.parse(json);

  let variablesEnum = '';

  variablesEnum += 'export const TypographyFamiliesVariables = [\n';
  for (const [familyName] of Object.entries(validatedJson.family)) {
    variablesEnum += `'family-${ConvertSnakeCaseToKebabCase(familyName)}',\n`;
  }
  variablesEnum += '] as const;\n';

  variablesEnum += 'export const TypographyWeightsVariables = [\n';
  for (const [weightName] of Object.entries(validatedJson.weight)) {
    variablesEnum += `'weight-${ConvertSnakeCaseToKebabCase(weightName)}',\n`;
  }
  variablesEnum += '] as const;\n';

  variablesEnum += 'export const TypographyTrackingVariables = [\n';
  for (const [trackingName] of Object.entries(validatedJson.tracking)) {
    variablesEnum += `'tracking-${trackingName}',\n`;
  }
  variablesEnum += '] as const;\n';

  variablesEnum += 'export const TypographyLeadingVariables = [\n';
  for (const [leadingName] of Object.entries(validatedJson.leading)) {
    variablesEnum += `'leading-${leadingName}',\n`;
  }
  variablesEnum += '] as const;\n';

  return variablesEnum;
}

export const CoreTypographyEnum = generateVariablesEnum(CoreTypography);

// Test
//console.log(CoreTypographyEnum);
