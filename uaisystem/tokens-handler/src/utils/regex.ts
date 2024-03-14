/*
  Todos eles aceitam vazio, para deixar o erro de vazio a cargo do zod.
*/

export const SnakeCaseRegex = new RegExp(
  /^(?!_)(?!.*__)(?!.*_$)[a-z0-9_]*(?!_)$/
);

export const KebabCaseRegex = new RegExp(
  /^(?!-)(?!.*--)(?!.*-$)[a-z0-9-]*(?!-)$/
);

export const HexColorRegex = new RegExp(/^(?:#[A-F0-9]{6}(?:[A-F0-9]{2})?|)$/);
