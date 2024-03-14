const fs = require('fs');
import {CoreColorsEnum} from './color-core';

function allEnums(): string {
  let enums = '';

  enums += CoreColorsEnum;
  enums += 'export const SemanticColorsVariables = ["oi"] as const;\n';
  enums += 'export const MajorScaleDimensionsVariables = ["oi"] as const;\n';
  enums += 'export const MinorScaleDimensionsVariables = ["oi"] as const;\n';
  enums += 'export const ExtraDimensionsVariables = ["oi"] as const;\n';
  enums += 'export const TypographyFamiliesVariables = ["oi"] as const;\n';
  enums += 'export const TypographyLeadingVariables = ["oi"] as const;\n';
  enums += 'export const TypographyTrackingVariables = ["oi"] as const;\n';
  enums += 'export const TypographyWeightsVariables = ["oi"] as const;\n';

  return enums;
}

const content = allEnums();
fs.writeFileSync('../../../../types/src/utils/enums/index.ts', content);
