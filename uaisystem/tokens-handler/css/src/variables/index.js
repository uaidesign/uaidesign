import getJson from '../utils/get-json.js';
import colorToCSS from './color/index.js';
import dimensionToCSS from './dimension/index.js';
import typographyToCSS from './typography/index.js';

function tokensToVariables(colorPath, dimensionPath, typographyPath) {
  const colorJson = getJson(colorPath);
  const dimensionJson = getJson(dimensionPath);
  const typographyJson = getJson(typographyPath);

  const color = colorToCSS(colorJson);
  const dimension = dimensionToCSS(dimensionJson);
  const typography = typographyToCSS(typographyJson);

  let variables = ""

  variables += color
  variables += dimension
  variables += typography

  return variables;
}

export default tokensToVariables;