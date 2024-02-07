import typographyToClasses from './typography/index.js'
import shadowToClasses from './shadow/index.js'
import dimensionToClasses from './dimension/index.js'
import colorToClasses from './color/index.js'

function tokensToClasses(colorConfigPath, colorPath, dimensionConfigPath, dimensionPath, shadowPath, typographyPath) {
  let classes = '';

  const color = colorToClasses(colorConfigPath, colorPath)
  const dimension = dimensionToClasses(dimensionConfigPath, dimensionPath)
  const shadow = shadowToClasses(shadowPath)
  const typography = typographyToClasses(typographyPath)

  classes += `${color}\n`;
  classes += `${dimension}\n`;
  classes += `${shadow}\n`;
  classes += `${typography}\n`;

  return classes
}

export default tokensToClasses