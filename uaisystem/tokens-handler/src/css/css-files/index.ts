const fs = require('fs');
import {CssClasses} from './classes';
import {CssVariables} from './variables';

function generateCssFile(): string {
  let css = '';

  css += '@media (prefers-color-scheme: dark) {\n';
  css += ':root {\n';
  css += CssVariables.darkColorsVariables;
  css += '}\n';
  css += '}\n';

  css += ':root {\n';
  css += CssVariables.otherVariables;
  css += '}\n';

  css += CssClasses;

  return css;
}

const CssFile = generateCssFile();
fs.writeFileSync('../../../../uaisystem-css/src/index.css', CssFile);
