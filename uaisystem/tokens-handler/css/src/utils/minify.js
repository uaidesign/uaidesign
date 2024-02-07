function minify(css) {
  css = css.replace(/\/\*(.*?)\*\//g, "");
  css = css.replace(/\s+/g, " ");
  css = css.replace(/\n\r/g, "");
  css = css.replace(/([^\w-])([a-zA-Z0-9-_]+)([^\w-])/g, "$1$2$3");

  return css;
}

export default minify