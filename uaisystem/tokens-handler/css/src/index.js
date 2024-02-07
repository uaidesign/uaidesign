import fs from "fs"
import minify from "./utils/minify.js"
import tokensToVariables from "./variables/index.js"
import tokensToClasses from "./classes/index.js"

function writeCss() {
  const variables = tokensToVariables(
    '../../../design-tokens/color.tokens.json',
    '../../../design-tokens/dimension.tokens.json',
    '../../../design-tokens/typography.tokens.json'
  )
  const classes = tokensToClasses(
    './classes/color/config.json',
    '../../../design-tokens/color.tokens.json',
    './classes/dimension/config.json',
    '../../../design-tokens/dimension.tokens.json',
    '../../../design-tokens/shadow.tokens.json',
    '../../../design-tokens/typography.tokens.json'
  )

  let css = ""

  css += variables
  css += `\n`
  css += classes

  return css
}

const css = writeCss()
fs.writeFileSync('../../../uaisystem-css/src/index.css', minify(css), 'utf8');