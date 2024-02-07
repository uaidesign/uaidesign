import camelToKebab from '../../utils/camel-to-kebab.js'

function trackingToVariables(json, typePrefix) {
  let variables = ""

  function writeVariables(obj, path) {
    for (let key in obj) {
      const baseFontSize = 16;

      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;
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

function familyWeightLeadingToVariables(json, typePrefix) {
  let variables = ""

  function processObject(obj, path) {
    for (let key in obj) {
      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;
      let variableValue = obj[key];

      if (typeof variableValue === "object") {
        processObject(variableValue, `${path}-${camelToKebab(key)}`);

      } else {
        variables += `${variableName}: ${variableValue};\n`;
      }
    }
  }

  processObject(json, "");

  return variables;
}

function typographyToVariables(json) {
  const family = familyWeightLeadingToVariables(json.typography.core.family, 'typography-core-family');
  const weight = familyWeightLeadingToVariables(json.typography.core.weight, 'typography-core-weight');
  const tracking = trackingToVariables(json.typography.core.tracking, 'typography-core-tracking');
  const leading = familyWeightLeadingToVariables(json.typography.core.leading, 'typography-core-leading');

  let variables = ""

  variables += family;
  variables += weight;
  variables += tracking;
  variables += leading;
  variables += `}`;

  return variables;
}

export default typographyToVariables;
