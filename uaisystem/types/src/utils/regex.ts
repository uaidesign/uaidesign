/* eslint-disable no-useless-escape */
/**
 * Todos eles aceitam vazio, para deixar o erro
 * de vazio a cargo do zod.
 *
 * FIXME: Em SnakeCaseRegex e KebabCaseRegex.
 * Fazer não permitir palavras e números juntos.
 * (lorem10 deve ser lorem-10).
 *
 * FIXME: Verificar se todos estão com a regra
 * certa e aceitando vazio.
 *
 * FIXME: Adicionar a verificação de máximos.
 */

export const SnakeCaseRegex = new RegExp(
  /^(?!_)(?!.*__)(?!.*_$)[a-z0-9_]*(?!_)$/
);

export const KebabCaseRegex = new RegExp(
  /^(?!-)(?!.*--)(?!.*-$)[a-z0-9-]*(?!-)$/
);

export const HexColorRegex = new RegExp(/^(#[A-F0-9]{6}([A-F0-9]{2}|)|)$/);

export const ExtraDimensionValueRegex = new RegExp(
  /^([0-9]{1,2}(\.|)[0-9]{0,3}|)(px|vh|\%|)$/
);

export const NumbersRegex = new RegExp(/^[0-9]*$/);

export const FontWeightRegex = new RegExp(/^([0-9]{1}00|)$/);

export const DecimalsRegex = new RegExp(/^((-|)[0-9]{1,2}(\.|)[0-9]{0,3}|)$/);

export const NaturalDecimalsRegex = new RegExp(
  /^([0-9]{1,2}(\.|)[0-9]{0,3}|)$/
);
