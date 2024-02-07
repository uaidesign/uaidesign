import getJson from '../../utils/get-json.js';
import camelToKebab from '../../utils/camel-to-kebab.js';

function colorToClasses(configPath, tokensPath) {
  const configJson = getJson(configPath);
  const colorTokensJson = getJson(tokensPath);
  const json = colorTokensJson.color.semantic

  let css = "";

  for (const nomeClasse in configJson) {
    const propriedades = configJson[nomeClasse];
    const prefixoClasse = camelToKebab(nomeClasse);

    for (const chaveCor in json) {
      const valoresCor = json[chaveCor];

      for (const valor in valoresCor) {
        const nomeVariavel = `--${camelToKebab(chaveCor)}-${camelToKebab(valor)}`;

        for (const propriedade of propriedades) {
          css += `.${prefixoClasse}-${camelToKebab(chaveCor)}-${camelToKebab(valor)} {\n`;
          css += `  ${propriedade}: var(${nomeVariavel});\n`;
          css += "}\n";
          css += "\n";
        }
      }
    }
  }

  return css;
}

export default colorToClasses;
