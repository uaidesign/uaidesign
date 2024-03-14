const ColorCoreData = require('./tokens/color-core.tokens.json');
const ColorSemanticData = require('./tokens/color-semantic.tokens.json');
const ScaleDimensionData = require('./tokens/dimension-scale.tokens.json');
const ExtraDimensionData = require('./tokens/dimension-extra.tokens.json');
const ShadowData = require('./tokens/shadow.tokens.json');
const TypographyCoreData = require('./tokens/typography-core.tokens.json');
const TypographySemanticData = require('./tokens/typography-semantic.tokens.json');

import {
  CoreColorsType,
  CoreTypographyType,
  ExtraDimensionsType,
  ScaleDimensionsType,
  SemanticColorsType,
  SemanticTypographyType,
  ShadowsType,
} from '@uaisystem/types';

export const CoreColors: CoreColorsType = ColorCoreData;
export const SemanticColors: SemanticColorsType = ColorSemanticData;
export const ScaleDimension: ScaleDimensionsType = ScaleDimensionData;
export const ExtraDimension: ExtraDimensionsType = ExtraDimensionData;
export const Shadow: ShadowsType = ShadowData;
export const CoreTypography: CoreTypographyType = TypographyCoreData;
export const SemanticTypography: SemanticTypographyType =
  TypographySemanticData;
