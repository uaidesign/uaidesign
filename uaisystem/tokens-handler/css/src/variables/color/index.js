import camelToKebab from '../../utils/camel-to-kebab.js'

function colorCoreToVariables(json, typePrefix) {
  let variables = ""

  function writeVariables(obj, path) {
    for (let key in obj) {
      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;
      let variableValue = obj[key];

      if (typeof variableValue === "object") {
        writeVariables(variableValue, `${path}-${camelToKebab(key)}`);

      } else {
        variables += `${variableName}: ${variableValue};\n`;
      }
    }
  }

  writeVariables(json, "");

  return variables;
}

function colorSemanticToVariables(json, typePrefix) {
  let variables = ""

  function processObject(obj, path) {
    for (let key in obj) {
      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;
      let variableValue = obj[key];

      if (typeof variableValue === "object") {
        processObject(variableValue, `${path}-${camelToKebab(key)}`);

      } else {
        variables += `${variableName}: var(--uai-color-core-${variableValue});\n`;
      }
    }
  }

  processObject(json, "");

  return variables;
}

function colorToVariables(json) {
  const colorCoreLightVariables = colorCoreToVariables(json.color.core.light, 'color-core');
  const colorCoreDarkVariables = colorCoreToVariables(json.color.core.dark, 'color-core');
  const colorSemanticVariables = colorSemanticToVariables(json.color.semantic, 'color-semantic');

  let variables = ""

  variables += `@media (prefers-color-scheme: dark) {\n`;
  variables += `:root {\n`;
  variables += colorCoreDarkVariables;
  variables += `}\n`;
  variables += `}\n`;

  variables += `:root {\n`;
  variables += colorCoreLightVariables;
  variables += colorSemanticVariables;

  return variables;
}

export default colorToVariables;
