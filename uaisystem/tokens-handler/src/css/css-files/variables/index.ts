import {CoreColorsVariables} from './color-core';
import {SemanticColorsVariables} from './color-semantic';
import {ExtraDimensionsVariables} from './dimension-extra';
import {ScaleDimensionsVariables} from './dimension-scale';
import {CoreTypographyVariables} from './typography-core';

function mergeAllVariables(): {
  darkColorsVariables: string;
  otherVariables: string;
} {
  let darkColorsVariables = '';
  let otherVariables = '';

  darkColorsVariables += CoreColorsVariables.dark;

  otherVariables += CoreColorsVariables.light;
  otherVariables += SemanticColorsVariables;
  otherVariables += ExtraDimensionsVariables;
  otherVariables += ScaleDimensionsVariables;
  otherVariables += CoreTypographyVariables;

  return {darkColorsVariables, otherVariables};
}

export const CssVariables = mergeAllVariables();

// Test
//console.log(CssVariables);
