const fs = require('fs');
import {CoreColorsJsonSchema} from './types/color-core';
import {SemanticColorsJsonSchema} from './types/color-semantic';
import {ExtraDimensionsJsonSchema} from './types/dimension-extra';
import {ScaleDimensionsJsonSchema} from './types/dimension-scale';
import {ShadowsJsonSchema} from './types/shadow';
import {CoreTypographyJsonSchema} from './types/typography-core';
import {SemanticTypographyJsonSchema} from './types/typography-semantic';

//console.log(' ');
//console.log('Json schemas build start');

console.time('⚡️ Build success in');

fs.writeFileSync(
  './dist/color-core.json',
  JSON.stringify(CoreColorsJsonSchema)
);

fs.writeFileSync(
  './dist/color-semantic.json',
  JSON.stringify(SemanticColorsJsonSchema)
);

fs.writeFileSync(
  './dist/dimension-scale.json',
  JSON.stringify(ScaleDimensionsJsonSchema)
);

fs.writeFileSync(
  './dist/dimension-extra.json',
  JSON.stringify(ExtraDimensionsJsonSchema)
);

fs.writeFileSync('./dist/shadow.json', JSON.stringify(ShadowsJsonSchema));

fs.writeFileSync(
  './dist/typography-core.json',
  JSON.stringify(CoreTypographyJsonSchema)
);

fs.writeFileSync(
  './dist/typography-semantic.json',
  JSON.stringify(SemanticTypographyJsonSchema)
);

console.timeEnd('⚡️ Build success in');
