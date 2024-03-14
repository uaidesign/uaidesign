import {ColorCssClasses} from './color';
import {DimensionCssClasses} from './dimension';
import {ShadowCssClasses} from './shadow';
import {TypographyCssClasses} from './typography';

function mergeAllClasses(): string {
  let classes = '';

  classes += ColorCssClasses;
  classes += DimensionCssClasses;
  classes += ShadowCssClasses;
  classes += TypographyCssClasses;

  return classes;
}

export const CssClasses = mergeAllClasses();

// Test
//console.log(CssClasses);
