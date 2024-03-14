const fs = require('fs');
import {CoreColorsEnum} from './color-core';
import {SemanticColorsEnum} from './color-semantic';
import {ExtraDimensionsEnum} from './dimension-extra';
import {ScaleDimensionsEnum} from './dimension-scale';
import {CoreTypographyEnum} from './typography-core';

function allEnums(): string {
  let enums = '';

  enums += CoreColorsEnum;
  enums += SemanticColorsEnum;
  enums += ScaleDimensionsEnum;
  enums += ExtraDimensionsEnum;
  enums += CoreTypographyEnum;

  return enums;
}

const content = allEnums();
fs.writeFileSync('../../../../types/src/utils/enums/index.ts', content);
