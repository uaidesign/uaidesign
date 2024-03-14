function ConvertSnakeCaseToKebabCase(snakeCaseString: string): string {
  return snakeCaseString.replace(/_/g, '-');
}

export default ConvertSnakeCaseToKebabCase;
