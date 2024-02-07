import camelToKebab from '../../utils/camel-to-kebab.js'

function dimensionToVariables(tokensJson) {
  let json = tokensJson.dimension
  let variables = "";

  function writeVariables(obj, path) {
    const baseFontSize = 16;

    for (let key in obj) {
      let variableName = `--uai-dimension${path}-${camelToKebab(key)}`;
      let variableValue = obj[key];

      if (typeof variableValue === "object") {
        writeVariables(variableValue, `${path}-${camelToKebab(key)}`);

      } else {
        variables += `${variableName}: ${variableValue / baseFontSize}rem;\n`;
      }
    }
  }

  writeVariables(json, "");

  return variables;
}

export default dimensionToVariables;
